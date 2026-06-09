function mutation(array) {
    let palabra1 = array[0].toLowerCase();
    let palabra2 = array[1].toLowerCase();
    for (let i = 0; i < palabra2.length; i++) {
        if (!(palabra1.includes(palabra2[i]))) {
            return false;
        }
    }
    return true;
}