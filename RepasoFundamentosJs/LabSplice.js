function frankenSplice(array1, array2, indice) {
  const copia1 = [...array1];
  const copia2 = [...array2];
  copia2.splice(indice, 0, ...copia1);
  return copia2;
}
console.log(frankenSplice([1, 2], ["a", "b"], 1));
