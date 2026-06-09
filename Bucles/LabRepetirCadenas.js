function repeatStringNumTimes(cadena, num) {
    let result = cadena;
    if (num <= 0) {
        return "";
    }
    for (let i = 1; i < num; i++) {
        result += cadena;
    }
    return result;
}
console.log(repeatStringNumTimes("*", 3));
