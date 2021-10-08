import StorageController from "./scripts/storageController";

/* const modal = document.querySelector('.modal-content')
const modalCloseButton = document.querySelector('.close');

const inputTitle = document.getElementById('inputTitle');
const inputText = document.getElementById('inputText');
//const closeButton = document.getElementById('close');

modal.addEventListener('click', () => {
    modalCloseButton.click();
}) */

class ToDo {
    constructor(){
        this.storageController = new StorageController();
        this.init();
    }

    init() {
        this.currentTasks = document.getElementById('currentTasks');
        this.completedTasks = document.getElementById('completedTasks');
        this.modalForm = document.forms.modalForm;
        this.modalCloseButton = document.getElementById('close');
        this.inputTitle = document.getElementById('inputTitle');
        this.inputTask = document.getElementById('inputText');
        this.inputPriority = document.getElementById('inputPriority');
        this.modalForm.addEventListener('submit', this.createNewTask.bind(this));
        this.taskContainer = document.getElementById('taskContainer');

        this.taskContainer.addEventListener('click', this.taskContainerClickHandler.bind(this))
        const itemList = this.storageController.getItemsList();
        if (itemList.currentTasks.length > 0) {
            itemList.currentTasks.forEach((item, index) => {
                this.createTaskNode(item.title, item.task, item.priority)
            })
        }

    }

   createNewTask(event) {
        event.preventDefault();
        const [title, task, priority] = [
            this.inputTitle.value,
            this.inputTask.value,
            this.getFieldsetValue()
        ];
        this.closeModal();
        this.createTaskNode(title, task, priority);
        this.storageController.addNewItem(title, task, priority);
    }

    completeTask() {

    }

    getFieldsetValue(){
        return document.querySelector('.form-check-input:checked').value;
    }

    createTaskNode(title, task, priority, isNew = true) {
        const taskNode = document.createElement('li');
        taskNode.className = `list-group-item d-flex w-100 mb-2 bg-${priority}`;
        taskNode.innerHTML = `
            <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${title}</h5>
                    <div>
                        <small class="mr-2">${priority} priority</small>
                        <small>11:00 01.01.2000</small>
                    </div>
                </div>
                <p class="mb-1 w-100">${task}</p>
            </div>
            ${
                (isNew) ?`
                <div class="dropdown m-2 dropleft">
                <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                    <button type="button" class="btn btn-success w-100" data-mode='complete'>Complete</button>
                    <button type="button" class="btn btn-info w-100 my-2" data-mode='edit'>Edit</button>
                    <button type="button" class="btn btn-danger w-100" data-mode ='delete'>Delete</button>
                </div>
            </div>
            ` : '<div class="dropdown m-2 dropleft"></div>'
            }
            `
        isNew ? this.currentTasks.append(taskNode) : this.completedTasks.append(taskNode);
    }

    closeModal() {
        this.modalCloseButton.click()
    }

    taskContainerClickHandler(e) {
        if (e.target.dataset.mode) {
            const mode = e.target.dataset.mode;
            console.log(e.target.closest('li'))
        }
    }

}

new ToDo();
