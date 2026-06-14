function titleCase(cadena) {
  let newCadena = "";
  const array = cadena.split(" ");
  for (let word of array) {
    let tam = word.length;
    newCadena += " " + word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      newCadena += word[i].toLowerCase();
    }
  }
  return newCadena.trim();
}

console.log(titleCase("I'm a little tea pot"));
