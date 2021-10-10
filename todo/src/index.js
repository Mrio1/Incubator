import StorageController from "./scripts/storageController";
import themeToggler from "./scripts/themeToggler";
import sortDirectionStorage from "./scripts/sortDirect";
import DateController from "./scripts/dateController";

/* const modal = document.querySelector('.modal-content')
const modalCloseButton = document.querySelector('.close');

const inputTitle = document.getElementById('inputTitle');
const inputText = document.getElementById('inputText');
//const closeButton = document.getElementById('close');

modal.addEventListener('click', () => {
    modalCloseButton.click();
}) */

themeToggler();

class ToDo {
    constructor(){
        this.storageController = new StorageController();
        this.init();
    }

    init() {
        this.newTaskId = 0;
        this.completeTaskId = 0;
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
        this.sortButtons.addEventListener('click', this.sortDirectionClickHandler.bind(this));
        this.taskContainer.addEventListener('click', this.taskContainerClickHandler.bind(this));
        this.dateController = new DateController();
        this.currentCountNode = document.getElementById('currentCount');
        this.completeCountNode = document.getElementById('completeCount');
        this.refreshTaskFields();
    }

    refreshTaskFields() {
        this.newTaskId = 0;
        this.completeTaskId = 0;
        this.currentTasks.innerHTML = '';
        this.completedTasks.innerHTML = '';

        if (this.storageController.getCurentItemsList().length > 0) {
            this.storageController.getCurentItemsList().forEach((item, index) => {
                this.createTaskNode(item.title, item.task, item.priority, item.date)
            });
        }
        if (this.storageController.getCompleteItemsList().length > 0) {
            this.storageController.getCompleteItemsList().forEach((item, index) => {
                this.createTaskNode(item.title, item.task, item.priority, item.date, false)
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
        const direction = (button.dataset.sort == 'true') || false;
        console.log("Dir", this.sortDirection)
        if (this.sortDirection != direction) {
            this.sortDirection = direction;
            this.sortDirectionStorage.changeDirection(direction);
            this.refreshTaskFields();
        }
        
    }

    getModalData() {
        return [this.inputTitle.value, this.inputTask.value, this.getFieldsetValue()]
    }

    putModalData(id) {
        const {title, task, priority} = this.storageController.getCurentItemsList()[id];
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
            const date = this.dateController.getCurrentDate();
            this.storageController.addNewItem(title, task, priority, date)
        }
        this.createTaskNode(title, task, priority);
    }

    completeTask(id) {
        const newCompleteTask = document.querySelector(`[data-id="${id}"]`);
        const {title, task, priority, date} = this.storageController.changeItemStatus(id);
        this.createTaskNode(title, task, priority, date, false);
        newCompleteTask.remove();   
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

    editTask(task, id) {
        console.log('Task:' , task)
        this.isUpdate = true;
        this.updateTask = task;
        this.updateTaskId = id;
        this.addTaskButton.click();
        this.putModalData(id);
    }

    createTaskNode(title, task, priority,  date = this.dateController.getCurrentDate(), isNew = true) {
        const taskNode = document.createElement('li');
        taskNode.className = `list-group-item d-flex w-100 mb-2 bg-${priority}`;
        if (this.isUpdate) {
            taskNode.dataset.id = this.updateTaskId;
        } else {
            taskNode.dataset.id = isNew ? this.newTaskId : this.completeTaskId;
        }
        
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
                ${ (isNew )? '<button type="button" class="btn btn-success w-100" data-mode="complete">Complete</button><button type="button" class="btn btn-info w-100 my-2" data-mode="edit">Edit</button>' : ''}
                <button type="button" class="btn btn-danger w-100" data-mode ='delete'>Delete</button>
            </div>
        </div>
            `
        if(this.isUpdate) {
            this.storageController.removeCurrentItem(this.updateTaskId, {title, task, priority})
            this.updateTask.replaceWith(taskNode);
            this.isUpdate = false;
            this.updateCounters();
            return
        }
        if (isNew) {
            (this.sortDirection) ? this.currentTasks.append(taskNode) : this.currentTasks.prepend(taskNode);
            this.newTaskId++;
            
        } else {
            (this.sortDirection) ? this.completedTasks.append(taskNode) : this.completedTasks.prepend(taskNode);
            this.completeTaskId++;
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
            const taskId =  task.dataset.id;
            if (mode == 'complete') {
                this.completeTask(taskId);
            } else if (mode == 'edit') {
                this.editTask(task, taskId)
            } else if (mode == 'delete') {
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
