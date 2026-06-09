function chunkArrayInGroups(array, num) {
    let newArray = [];
    for (let i = 0; i < array.length; i += num) {
        newArray.push(array.slice(i, i + num));
    }
    return newArray;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));