import StorageController from "./scripts/storageController";
import themeToggler from "./scripts/themeToggler";
import sortDirectionStorage from "./scripts/sortDirect";
import DateController from "./scripts/dateController";
import "./style/index.scss";
import "./style/toggler.scss";

themeToggler();

class ToDo {
    constructor(){
        this.storageController = new StorageController();
        this.newTaskId = this.storageController.lastTaskId;
        this.currentTasks = document.getElementById('currentTasks');
        this.completedTasks = document.getElementById('completedTasks');
        this.modalForm = document.forms.modalForm;
        this.addTaskButton = document.querySelector('[data-target="#exampleModal"]');
        this.modalCloseButton = document.getElementById('close');
        this.inputTitle = document.getElementById('inputTitle');
        this.inputTask = document.getElementById('inputText');
        this.inputPriority = document.getElementById('inputPriority');
        this.modalForm.addEventListener('submit', this.modalSubmitHandler.bind(this));
        this.taskContainer = document.getElementById('taskContainer');
        this.sortButtons = document.getElementById('sortButtons');
        this.sortDirectionStorage = new sortDirectionStorage();
        this.sortDirection = this.sortDirectionStorage.getDirection();
        this.isUpdate = false;
        this.addTaskButton.addEventListener('click', this.addTaskButtonClickHandler.bind(this));
        this.sortButtons.addEventListener('click', this.sortDirectionClickHandler.bind(this));
        this.taskContainer.addEventListener('click', this.taskContainerClickHandler.bind(this));
        this.dateController = new DateController();
        this.currentCountNode = document.getElementById('currentCount');
        this.completeCountNode = document.getElementById('completeCount');
        this.refreshTaskFields();
    }

    refreshTaskFields() {
        this.currentTasks.innerHTML = '';
        this.completedTasks.innerHTML = '';
        if (this.storageController.getCurentItemsList().length > 0) {
            this.storageController.getCurentItemsList().forEach(item => {
                this.createTaskNode(item.id, item.title, item.task, item.priority, item.date)
            });
        }
        if (this.storageController.getCompleteItemsList().length > 0) {
            this.storageController.getCompleteItemsList().forEach(item => {
                this.createTaskNode(item.id, item.title, item.task, item.priority, item.date, false)
            })
        }
    }

    sortDirectionClickHandler({target}) {
        let button;
        if (target.tagName == 'I') {
            button = target.closest('[data-sort]');
        } else {
            button = target;
        }
        const sortDirection = (button.dataset.sort == 'true') || false;
        if (this.sortDirection !== sortDirection) {
            this.sortDirection = sortDirection;
            this.sortDirectionStorage.changeDirection(sortDirection);
            this.refreshTaskFields();
        }
    }

    getModalData() {
        return [this.inputTitle.value, this.inputTask.value, this.getFieldsetValue()]
    }

    putModalData(id) {
        const {title, task, priority} = this.storageController.getCurrentItem(id);
        this.inputTitle.value = title;
        this.inputTask.value = task;
        document.getElementById(priority).checked = true;
    }

    getFieldsetValue(){
        return document.querySelector('.form-check-input:checked').value;
    }

    modalSubmitHandler(event) {
        event.preventDefault();
        const [title, task, priority] = this.getModalData();
        this.closeModal();
        if (!this.isUpdate) {
            this.newTaskId++;
            const date = this.dateController.getCurrentDate();
            this.storageController.addNewItem(this.newTaskId, title, task, priority, date);
            this.createTaskNode(this.newTaskId, title, task, priority, date);
        }
        else {
            this.createTaskNode(this.updateTaskId, title, task, priority);
        }
        
    }

    completeTask(id) {
        this.storageController.changeItemStatus(id)
        this.refreshTaskFields();   
    }

    deleteTask(task, taskId) {
        if(task.closest('ul').id == 'currentTasks') {
            this.storageController.removeCurrentItem(taskId);
            task.remove();
        } else {
            this.storageController.removeCompleteItem(taskId);
            task.remove();
        }
        this.updateCounters();
    }

    editTask(id, task) {
        this.updateTaskId = id;
        this.isUpdate = true;
        this.updateTask = task;
        this.updateTaskId = id;
        this.addTaskButton.click();
        this.putModalData(id);
    }

    addTaskButtonClickHandler() {
        this.modalForm.reset();
    }

    createTaskNode(id, title, task, priority,  date = this.dateController.getCurrentDate(), isNew = true) {
        const taskNode = document.createElement('li');
        taskNode.className = `list-group-item d-flex w-100 mb-2 bg-${priority.toLowerCase()}`;
        taskNode.dataset.id = id;
        taskNode.innerHTML = `
            <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${title}</h5>
                    <div>
                        <small class="mr-2">${priority} priority</small>
                        <small>${date}</small>
                    </div>
                </div>
                <p class="mb-1 w-100">${task}</p>
            </div>
            ` + `
            <div class="dropdown m-2 dropleft">
            <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                ${(isNew )? '<button type="button" class="btn btn-success w-100 mb-2" data-mode="complete">Complete</button><button type="button" class="btn btn-info w-100 mb-2" data-mode="edit">Edit</button>' : '<button type="button" class="btn btn-success w-100 my-2" data-mode="uncomplete">Uncomplete</button>'}
                <button type="button" class="btn btn-danger w-100" data-mode ='delete'>Delete</button>
            </div>
        </div>
            `
        if(this.isUpdate) {
            this.storageController.updateItem(id, {id, title, task, priority, date})
            this.updateTask.replaceWith(taskNode);
            this.isUpdate = false;
            this.updateCounters();
            return
        }
        if (isNew) {
            (this.sortDirection) ? this.currentTasks.append(taskNode) : this.currentTasks.prepend(taskNode);   
        } else {
            (this.sortDirection) ? this.completedTasks.append(taskNode) : this.completedTasks.prepend(taskNode);
        }
        this.updateCounters();
    }

    closeModal() {
        this.modalForm.reset();
        this.modalCloseButton.click();
    }

    taskContainerClickHandler(e) {
        if (e.target.dataset.mode) {
            const mode = e.target.dataset.mode;
            const task =  e.target.closest('li');
            const taskId =  Number(task.dataset.id);
            if (mode == 'complete') {
                this.completeTask(taskId);
            } 
            else if (mode == 'uncomplete') {
                this.completeTask(taskId);
            }
            else if (mode == 'edit') {
                this.editTask(taskId, task);
            }
            else if (mode == 'delete') {
                this.deleteTask(task, taskId)
            }
        }
    }

    updateCounters() {
        this.currentCountNode.textContent = this.storageController.getCurrentCount();
        this.completeCountNode.textContent = this.storageController.getCompleteCount();
    }
}

new ToDo();
