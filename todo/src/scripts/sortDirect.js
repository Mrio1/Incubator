export default class {
    constructor(){
        this.init();
    }

    init() {
        let direction = JSON.parse(localStorage.getItem('direction'));
        if (direction === null) {
            localStorage.setItem('direction', true);
            this.direction = true;
        } else {
            this.direction = direction;
        }
        
    }

    getDirection() {
        return this.direction;
    }

    changeDirection(direction) {
        if (this.direction !== direction) {
            this.direction = !this.direction;
            localStorage.setItem('direction', direction);
        }
        return direction;
    }
}