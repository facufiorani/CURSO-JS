function largestOfAll(arrays) {
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    let largest = arrays[i][0];
    for (let j = 1; j < arrays[i].length; j++) {
      if (arrays[i][j] > largest) {
        largest = arrays[i][j];
      }
    }
    result.push(largest);
  }
  return result;
}
