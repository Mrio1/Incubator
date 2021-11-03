import getFormatCurrentDate from "./dateController";

const tasksContainer = document.getElementById('tasksContainer');
const currentTasksField = document.getElementById('currentTasks');
const completedTasksField = document.getElementById('completedTasks');

function refreshTaskFields(currentTasks, completeTasks) {
    currentTasksField.innerHTML = '';
    completedTasksField.innerHTML = '';
    if (currentTasks.length) {
        currentTasks.forEach(taskData => {
            const {id, title, task, priority, date, isCurrent} = taskData;
            createTaskNode(id, title, task, priority, date, isCurrent)
        });
    }
    if (completeTasks.length) {
        completeTasks.forEach(taskData => {
            const {id, title, task, priority, date, isCurrent} = taskData;
            createTaskNode(id, title, task, priority, date, isCurrent);
        })
    }
}

function createTaskNode(id, title, task, priority, date, isCurrent = true) {
    const taskNode = document.createElement('li');
    taskNode.className = `list-group-item d-flex w-100 mb-2 bg-${priority.toLowerCase()}`;
    taskNode.dataset.id = id;
    taskNode.innerHTML = `
        <div class="w-100 mr-2">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${title}</h5>
                <div>
                    <small class="mr-2">${priority} priority</small>
                    <small>${getFormatCurrentDate(date)}</small>
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
                ${(isCurrent)? '<button type="button" class="btn btn-success w-100 mb-2" data-mode="complete">Complete</button><button type="button" class="btn btn-info w-100 mb-2" data-mode="edit">Edit</button>' : '<button type="button" class="btn btn-success w-100 my-2" data-mode="uncomplete">Uncomplete</button>'}
                <button type="button" class="btn btn-danger w-100" data-mode ='delete'>Delete</button>
            </div>
        </div>
    `
    if (isCurrent) {
        currentTasksField.append(taskNode);   
    } else {
        completedTasksField.append(taskNode);
    }
}

function deleteItem(id) {
    document.querySelector(`[data-id='${id}']`).remove();
}

function setTasksContainerClickHandler(callabck) {
    tasksContainer.addEventListener('click', (e) => {
        e.preventDefault();
        tasksContainerClickHandler(e.target, callabck)
    })
}

function tasksContainerClickHandler(target, callback) {
    if (target.dataset.mode) {
        const taskId = target.closest('[data-id]').dataset.id;
        callback(taskId, target.dataset.mode)
    }
}

export {refreshTaskFields, createTaskNode, deleteItem, setTasksContainerClickHandler}
