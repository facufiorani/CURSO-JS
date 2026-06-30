const currentDate = new Date();
const currentDateFormat = "Current Date and Time: " + currentDate; 
console.log(currentDateFormat);


function formatDateMMDDYYYY(date) {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return "Formatted Date (MM/DD/YYYY): " + month + "/" + day + "/" + year;
}
function formatDateLong(date) {
    const fecha = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
    return 'Formatted Date (Month Day, Year): ' + fecha
}