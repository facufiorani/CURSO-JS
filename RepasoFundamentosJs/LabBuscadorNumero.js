function func(num) {
  return num % 2 === 0;
}

function findElement(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return array[i];
    }
  }
}
