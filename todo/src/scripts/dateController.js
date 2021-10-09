class DateController {
    getCurrentDate() {
        const date = new Date();
        let [hour, minute, day, month, year] = [date.getHours(), date.getMinutes(), date.getDate(), date.getMonth() + 1, date.getFullYear()];
        if (hour <= 9) {
            hour = `0${hour}`;
        }
        if (minute <= 9) {
            minute = `0${minute}`;
        }
        if(day <= 9) {
            day = `0${day}`
        }
        if(month <= 9) {
            month = `0${month}`
        }
        return `${hour}.${minute} ${day}.${month}.${year}`
    }
}

export default DateController;
