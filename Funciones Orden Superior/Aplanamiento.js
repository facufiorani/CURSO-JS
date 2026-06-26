function steamrollArray(array) {
  while (array.some((el) => Array.isArray(el))) {
    array = [].concat(...array);
  }
  return array;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
