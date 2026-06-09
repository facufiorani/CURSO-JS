function findLongestWordLength(string) {
    let words = string.split(" ");
    let mayor = 0;
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].length;
        if (words[i] > mayor) {
            mayor = words[i];
        }
    
    }
    return mayor;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));