function myReplace(string, word, wordReplace) {
    if (word[0].match(/[A-Z]/)) {
        wordReplace = wordReplace[0].toUpperCase() + wordReplace.slice(1);
        return string.replace(word, wordReplace);
    } else {
        wordReplace = wordReplace[0].toLowerCase() + wordReplace.slice(1);
        return string.replace(word, wordReplace);
    }
}
