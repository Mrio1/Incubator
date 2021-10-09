class StorageController {
    constructor(name) {
        this.init();
        this.data;
    }

    init() {
        if (!localStorage.getItem('toDo')){
            localStorage.setItem('toDo', JSON.stringify(
                {
                    'currentTasks': [],
                    'completeTasks': [],
                }
            ));
        }
        this.data = JSON.parse(localStorage.getItem('toDo'));
        this.removeEmptyItems();
    }

    removeEmptyItems() {
        this.data['currentTasks'] = this.data['currentTasks'].filter((item) => {return item != null});
        this.data['completeTasks'] = this.data['completeTasks'].filter((item) => {return item != null});
        console.log(this.data)
        
    }

    updateStorage() {
        /* this.removeEmptyItems(this.data); */
        localStorage.setItem('toDo', JSON.stringify(this.data));
        this.data = JSON.parse(localStorage.getItem('toDo'));
    }
    
    getItemsList() {
        return this.data;
    }

    getCurentItemsList() {
        return this.data['currentTasks'];
    }

    getCompleteItemsList() {
        return this.data['completeTasks'];
    }

    addNewItem(title, task, /* date, */ priority) {
        this.data.currentTasks.push(
            {
                'title': title,
                'task': task,
                /* 'date': date, */
                'priority': priority
            }
        )
        localStorage.setItem('toDo', JSON.stringify(this.data));
    }

    changeItemStatus(id) {
        let currentTaskList = this.getCurentItemsList();
        const task = currentTaskList[id];
        this.getCompleteItemsList().push(task);
        this.data.currentTasks.splice(id, 1);
        this.updateStorage();
        console.log(currentTaskList)
        return task;
    }

    removeCurrentItem(id, updateData) {
        if(updateData) {
            this.data.currentTasks[id] = updateData;
            console.log('Update: ', updateData)
        } else {
            this.data.currentTasks.splice(id, 1);
            console.log('No update: ')
        }
        
        this.updateStorage();
    }

    removeCompleteItem(id){
        this.data.completeTasks.splice(id, 1, null);
        this.updateStorage();
    }
}

export default StorageController;
