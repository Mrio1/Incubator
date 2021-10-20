class SortDirection {
    constructor(){
        this.direction = JSON.parse(localStorage.getItem('direction'));
        if (this.direction === null) {
            localStorage.setItem('direction', true);
            this.direction = true;
        }
    }

    getDirection() {
        return this.direction;
    }

    changeDirection(direction) {
        if (this.direction !== direction) {
            this.direction = direction;
            localStorage.setItem('direction', direction);
        }
        return direction;
    }
}

export default SortDirection;
