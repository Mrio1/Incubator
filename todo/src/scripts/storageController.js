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
        return this.separeteNewItems(Object.values(this.data['tasks']));
    }

    getItemData(id) {
        return this.data.tasks[id];
    }

    separeteNewItems(data) {
        let newItems = data.filter(item => item.isCurrent),
        oldItems = data.filter(item => !item.isCurrent);
        if (this.data.sortDirection) {
            newItems = newItems.reverse();
            oldItems = oldItems.reverse();
        }
        return [newItems, oldItems];
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
            id,
            title,
            task,
            priority
        })
        this.updateStorage();
    }

    deleteItem(id) {
        this.data.tasks = Object.fromEntries(
            Object.entries(this.data.tasks).filter(([key]) => {
                return key !== id;
            })
        );
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
