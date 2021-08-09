
export const convertISODateToYYYYMMDD = (date) => {
    var newDate = new Date(date);
    var stringNewDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
    return stringNewDate
}