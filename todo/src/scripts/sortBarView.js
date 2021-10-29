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
        const isChange =  (JSON.parse(targetButton.dataset.sort) === sortDirection);
        if (isChange) {
            sortDirection = !sortDirection;
        }
        return isChange;
    }
}

export {initChangeDirectionHandler}