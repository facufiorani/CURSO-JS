function isPalindrome(word) {
  const wordReverseArray = word.split("").reverse();
  if (word.toLowerCase() === wordReverseArray.join("").toLowerCase()) {
    return true;
  }
  return false;
}

function findPalindromeBreaks(words) {
  const array = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      array.push(i);
    }
  }
  return array;
}

function findRepeatedPhrases(words, phraseLength) {
    const mapa = {}
    const array = []
    if (phraseLength >= words.length) {
        return array
    }
    for (let i = 0; i <= words.length - phraseLength; i++) {
      let frase = words.slice(i, i + phraseLength).join(" ")
      if (!mapa[frase]) {
            mapa[frase] = []
        }
        mapa[frase].push(i)
      }
    for (let frase in mapa) {
      if (mapa[frase].length > 1) {
        mapa[frase].forEach((indice) => array.push(indice));
      }
    }
    return array;
    }

function analyzeTexts(texts, phraseLength) {
      const array = [];
      for (let i = 0; i < texts.length; i++) {
        let repeated = findRepeatedPhrases(texts[i], phraseLength);
        let palindrome = findPalindromeBreaks(texts[i]);
        array.push({
          repeatedPhrases: repeated,
          palindromeBreaks: palindrome,
        });
      }
      return array;
    }

