import StorageController from "./scripts/storageController";
import themeToggler from "./scripts/themeToggler";
import * as sortBarView from  "./scripts/sortBarView";
import * as tasksFieldView from "./scripts/tasksFieldView";
import * as modalForm from "./scripts/modalForm";
import generateId from "./scripts/idGenerator";
import setCounter from "./scripts/itemCounter";
import * as dictionary from "./scripts/dictionary";
import "./style/index.scss";
import "./style/toggler.scss";

themeToggler();

class ToDo {
    constructor(){
        this.storageController = new StorageController();
        modalForm.addSubmitHandler(this.modalSubmitCallback.bind(this));
        tasksFieldView.setTasksContainerClickHandler(this.changeTaskMode.bind(this));
        this.sortDirection = this.storageController.getSortDirection();
        sortBarView.initChangeDirectionHandler(this.sortDirection, this.changeTaskSortDirection.bind(this));
        this.sortDirection = this.storageController.getSortDirection();
        tasksFieldView.setSortDirection(this.sortDirection);
        this.refreshTasksField();
    }

    changeTaskSortDirection(isChange) {
        if (isChange) {
            tasksFieldView.setSortDirection(this.storageController.changeSortDirection());
            this.refreshTasksField();
        }
    }

    refreshTasksField() {
        const tasksData = this.storageController.getItemsList();
        tasksFieldView.refreshTaskFields(tasksData);
        setCounter(tasksData[0].length ,tasksData[1].length);
    }

    changeTaskMode(taskId, modeWord) {
        const mode = dictionary.modes[modeWord];
        if (mode === 'delete') {
            this.deleteTask(taskId);
        }
        if (mode === 'complete' || mode === 'uncomplete') {
            this.storageController.changeItemStatus(taskId);
        }
        if(mode === 'edit') {
            this.editTask(taskId)
        }
        this.refreshTasksField();
    }

    modalSubmitCallback([title, task, priority], isNew) {
        let taskId = isNew ? generateId() : this.editTaskData.id;
        if (isNew) {
            this.storageController.addNewItem(taskId, title, task, priority, Date.now())
        } else {
            this.storageController.updateItem(taskId, title, task, priority)
        }
        this.refreshTasksField();
    }

    editTask(id) {
        modalForm.activateModal();
        this.editTaskData = this.storageController.getItemData(id);
        const {title, task, priority} = this.editTaskData;
        modalForm.setModalData(title, task, priority);
    }

    completeTask(id) {
        this.storageController.changeItemStatus(id)
        this.refreshTaskFields();   
    }

    deleteTask(taskId) {
        this.storageController.deleteItem(taskId);
        tasksFieldView.deleteItem(taskId);
    }

    taskContainerClickHandler(e) {
        if (e.target.dataset.mode) {
            const mode = e.target.dataset.mode;
            const task =  e.target.closest('li');
            const taskId =  Number(task.dataset.id);
            if (mode === 'complete') {
                this.completeTask(taskId);
            } 
            else if (mode === 'uncomplete') {
                this.completeTask(taskId);
            }
            else if (mode === 'edit') {
                this.editTask(taskId, task);
            }
            else if (mode === 'delete') {
                this.deleteTask(task, taskId)
            }
        }
    }
}

new ToDo();
