function getIndexToIns(array, num) {
  array.sort((a, b) => a - b);
  const resultado = array.findIndex((element) => element >= num);
  if (resultado === -1) {
    return array.length
  } else {
    return resultado;
  }
}
console.log(getIndexToIns([3, 10, 5], 11));
