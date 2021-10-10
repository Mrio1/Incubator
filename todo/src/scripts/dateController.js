class DateController {
    constructor() {
    }

    getCurrentDate() {
        const date = new Date();
        return `
            ${date.toDateString()} ${date.getHours()}-${date.getMinutes()}
        `
    }
}

export default DateController;
