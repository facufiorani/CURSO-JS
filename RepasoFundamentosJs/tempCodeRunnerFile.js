function uniteUnique(...arrays) {
  const result = [];
  for (const array of arrays) {
    for (const element of array) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5])); // [1, 2, 4, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1])); // [1, 2, 3, 5, 4]
