const lunches = [];
function addLunchToEnd(array, lunch) {
    array.push(lunch);
    console.log(`${lunch} added to the end of the lunch menu.`);
    return array;
    }
    function addLunchToStart(array, lunch) {
    array.unshift(lunch);
    console.log(`${lunch} added to the start of the lunch menu.`);
    return array;
    }

    function removeLastLunch(array) {
    if (array.length === 0) {
        return console.log("No lunches to remove.");
    }
    let last = array[array.length - 1];
    console.log(`${last} removed from the end of the lunch menu.`);
    array.pop();
    return array;
    }
    function removeFirstLunch(array) {
    if (array.length === 0) {
        return console.log("No lunches to remove.");
    }
    let first = array[0];
    console.log(`${first} removed from the start of the lunch menu.`);
    array.shift();
    return array;
    }

    function getRandomLunch(array) {
    if (array.length === 0) {
        return console.log("No lunches available.");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log(`Randomly selected lunch: ${array[randomIndex]}`);
    }
    function showLunchMenu(array) {
    if (array.length === 0) {
        return console.log("The menu is empty.");
    }
    return console.log(`Menu items: ${array.join(", ")}`);
}
