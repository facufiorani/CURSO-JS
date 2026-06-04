function confirmEnding(string, stringCompare) {
    let cant = stringCompare.length;
    if (string.slice(-cant) === stringCompare) {
        return true;
    }
    return false;
}
