class StorageController {
    constructor() {
        if (!localStorage.getItem('toDo')) {
            localStorage.setItem('toDo', JSON.stringify({
               'tasks' : {
                    'o2go6gkfcrr': {
                        id: 'o2go6gkfcrr',
                        isCurrent: true,
                        title: 'Make cool App',
                        task: 'Make id sort',
                        priority: 'Low',
                        date: '1635494070101',
                    }
                },
                'sortDirection': true
            }
            ));
        }
        this.data = JSON.parse(localStorage.getItem('toDo'));
    }

    updateStorage() {
        localStorage.setItem('toDo', JSON.stringify(this.data));
        this.data = JSON.parse(localStorage.getItem('toDo'));
    }
    
    getItemsList() {
        return this.separeteNewItems(Object.entries(this.data['tasks']).map(item => item[1]));
    }

    getItemData(id) {
        return this.data.tasks[id];
    }

    separeteNewItems(data) {
        const newItems = data.filter(item => item.isCurrent);
        const oldItems = data.filter(item => !item.isCurrent);
        return [newItems, oldItems];
    }

    sortItems(data, direction = true) {
        
    }

    addNewItem(id, title, task, priority, date) {
        this.data.tasks[id] = {
            id,
            title,
            task,
            priority,
            date,
            isCurrent: true,
        }
        this.updateStorage();
    }

    changeItemStatus(id) {
        this.data.tasks[id].isCurrent = !this.data.tasks[id].isCurrent;
        this.updateStorage();
    }

    updateItem(id, title, task, priority) {
        Object.assign(this.data.tasks[id], {
            title,
            task,
            priority
        })
        this.updateStorage();
    }

    deleteItem(id) {
        delete this.data.tasks[id];
        this.updateStorage();
    }

    getSortDirection() {
        return this.data.sortDirection;
    }

    changeSortDirection() {
        this.data.sortDirection = !this.data.sortDirection;
        this.updateStorage();
        return this.data.sortDirection;
    }
}

export default StorageController;
