function fearNotLetter(str) {
  letras = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length - 1; i++) {
    let codigoActual = str.charCodeAt(i);
    let codigoSiguiente = str.charCodeAt(i + 1);
    if (codigoSiguiente - codigoActual !== 1) {
      return String.fromCharCode(codigoActual + 1);
    }
  }

  return undefined;
}
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
