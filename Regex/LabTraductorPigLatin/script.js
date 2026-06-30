function translatePigLatin(string) {
    const regex1 = /[aeiou]/;
    if (regex1.test(string[0])) {
        return string + "way";
    }
    const indice = string.search(regex1);
    if (indice !== -1) {
        return string.slice(indice) + string.slice(0, indice) + "ay";

    } else {
        return string + 'ay'
    }
}