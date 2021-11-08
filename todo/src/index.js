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
        this.refreshTasksField();
    }

    changeTaskSortDirection(isChange) {
        if (isChange) {
            this.storageController.changeSortDirection()
            this.refreshTasksField();
        }
    }

    refreshTasksField() {
        const [currentTasks, completeTasks] = this.storageController.getItemsList();
        tasksFieldView.refreshTaskFields(currentTasks, completeTasks);
        setCounter(currentTasks.length, completeTasks.length);
    }

    changeTaskMode(taskId, modeWord) {
        if (dictionary.modes[modeWord] === 'delete') {
            this.deleteTask(taskId);
        } 
        else if (dictionary.modes[modeWord] === 'complete' || dictionary.modes[modeWord] === 'uncomplete') {
            this.storageController.changeItemStatus(taskId);
        }
        else if(dictionary.modes[modeWord] === 'edit') {
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
}

new ToDo();
