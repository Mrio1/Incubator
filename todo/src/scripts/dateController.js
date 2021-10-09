class DateController {
    getCurrentDate() {
        const date = new Date();
        let [mainDate, hour, minute] = [date.toDateString(), date.getHours(), date.getMinutes()];
        if (hour <= 9) {
            hour = '0'+ hour;
        }
        if (minute <= 9) {
            minute = '0'+ minute;
        }
        return `${mainDate} | ${hour}-${minute}`
    }
}

export default DateController;
