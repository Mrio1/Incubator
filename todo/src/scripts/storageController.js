class StorageController {
    constructor() {
        this.data = null;
        this.init();
        
    }

    init() {
        if (!localStorage.getItem('toDo')){
            localStorage.setItem('toDo', JSON.stringify(
                {
                    'tasks': {
                        0: {
                            id: 0,
                            title: "Make cool App",
                            task: "Make id sort",
                            priority: "Low",
                            date: '11.00 01.01.2000'
                        }
                    },
                    'lastTaskId': 0,
                    'currentTasksId': [0],
                    'completeTasksId': [],
                }
            ));
        }
        this.data = JSON.parse(localStorage.getItem('toDo'));
    }

    get lastTaskId() {
        return this.data.lastTaskId;
    }

    sortTasksId() {
        this.data.currentTasksId = this.data.currentTasksId.sort((a, b)=> a - b);
        this.data.completeTasksId = this.data.completeTasksId.sort((a, b)=> a - b);  
    }

    updateStorage() {
        localStorage.setItem('toDo', JSON.stringify(this.data));
        this.data = JSON.parse(localStorage.getItem('toDo'));
    }
    
    getItemsList() {
        return this.data;
    }

    getCurentItemsList() {
        const currentTasks = [];
        this.data.currentTasksId.forEach(id => {
            currentTasks.push(this.data.tasks[id])
        });
        return currentTasks
    }

    getCurrentItem(id) {
        return this.data.tasks[id];
    }

    getCompleteItemsList() {
        const completeTasks = [];
        this.data.completeTasksId.forEach(id => {
            completeTasks.push(this.data.tasks[id])
        });
        return completeTasks;
    }

    addNewItem(id, title, task, priority, date) {
        this.data.tasks[id] =
            {
                'id': id,
                'title': title,
                'task': task,
                'priority': priority,
                'date': date
            }
        this.data.currentTasksId.push(id);
        this.data.lastTaskId++;
        this.updateStorage();
    }

    changeItemStatus(id) {
        let currentTaskIndex = this.data.currentTasksId.indexOf(id);
        if (currentTaskIndex >= 0) {
            this.data.currentTasksId.splice(currentTaskIndex, 1);
            this.data.completeTasksId.push(id);
        } else {
            const uncompleteTaskIndex = this.data.completeTasksId.indexOf(id);
            this.data.completeTasksId.splice(uncompleteTaskIndex, 1);
            this.data.currentTasksId.push(id);
        }
        this.sortTasksId();
        this.updateStorage();
    }

    updateItem(id, data) {
        data.id = id;
        this.data.tasks[id] = data;
        this.updateStorage();
    }

    removeCurrentItem(id) {
        delete this.data.tasks[id];
        this.data.currentTasksId.splice(
            this.data.currentTasksId.indexOf(),
            1
        )
        this.updateStorage();
        this.updateStorage();
    }

    removeCompleteItem(id){
        delete this.data.tasks[id];
        this.data.completeTasksId.splice(
            this.data.completeTasksId.indexOf(),
            1
        )
        this.updateStorage();
    }

    getCurrentCount() {
        return this.data.currentTasksId.length;
    }

    getCompleteCount() {
        return this.data.completeTasksId.length;
    }
}

export default StorageController;
