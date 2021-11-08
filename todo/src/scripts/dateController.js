function getFormatCurrentDate(milleseconds = null) {
    const date = new Date(Number(milleseconds));
    let hour = date.getHours();
    let minute = date.getMinutes()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear();
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

export default getFormatCurrentDate;
