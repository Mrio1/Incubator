const currentCountNode = document.getElementById('currentCount');
const completeCountNode = document.getElementById('completeCount');

function setCounter(current, complete) {
    currentCountNode.textContent = current || 0;
    completeCountNode.textContent = complete || 0;
}

export default setCounter;
