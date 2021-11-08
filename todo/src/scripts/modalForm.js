const modalForm = document.forms['modal-form'];
const modalElements = modalForm.elements;
const modalActivateButton = document.querySelector('[data-target="#exampleModal"]');
const closeButton = document.getElementById('close');
const titleElement = modalElements['modal-form-title'];
const taskElement = modalElements['modal-form-task'];
const priorityFieldSet = modalElements['modal-form-priority-fieldset'];
let isNew = true;

function activateModal() {
    modalActivateButton.click();
    modalForm.reset();
}

modalActivateButton.addEventListener('click', () => {
    activateModal();
})

function addSubmitHandler(callback) {
    modalForm.addEventListener('submit', e => {
        e.preventDefault();
        callback(getFormData(), isNew);
        isNew = true;
    })
}

function getFormData() {
    const title = titleElement.value;
    const task = taskElement.value;
    const priority = priorityFieldSet.querySelector('.form-check-input:checked').value;
    hideModal();
    return [title, task, priority, isNew];
}

function setModalData(title, task, priority) {
    isNew = false;
    titleElement.value = title;
    taskElement.value = task;
    priorityFieldSet.querySelector(`#${priority.toLowerCase()}`).checked = true;
}

function cleanModalForm() {
    modalForm.reset();
}

function hideModal() {
    closeButton.click();
    cleanModalForm();
}

export { setModalData, addSubmitHandler, hideModal, activateModal};
