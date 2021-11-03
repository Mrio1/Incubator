const sortButtonsBlock = document.getElementById('sortButtons');
let sortDirection;

function initChangeDirectionHandler(currentDirection, callback) {
    sortDirection = currentDirection;
    sortButtonsBlock.addEventListener('click', ({target}) => {
        const isChange = sortButtonClickHandler(target);
        callback(isChange)
    })
}

function sortButtonClickHandler(target) {
    const targetButton = target.closest('.btn')
    if (targetButton) {
        const buttonSortValue = JSON.parse(targetButton.dataset.sort);
        const isChange = (buttonSortValue !== sortDirection);
        if (isChange) {
            sortDirection = buttonSortValue;
        }
        return isChange;
    }
}

export {initChangeDirectionHandler}