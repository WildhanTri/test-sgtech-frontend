
export const convertISODateToYYYYMMDD = (date) => {
    var newDate = new Date(date);
    var stringNewDate = newDate.getFullYear() + '-' + ((newDate.getMonth() + 1) < 10 ? '0' : '') + (newDate.getMonth() + 1) + '-' + (newDate.getDate() < 10 ? '0' : '') + newDate.getDate();
    return stringNewDate
}


export const currencyFormat = (num) => {
    if (num != null) {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    return ''
}