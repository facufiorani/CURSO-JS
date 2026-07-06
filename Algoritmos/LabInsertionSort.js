function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // tomás el elemento actual
    let j = i - 1;

    // desplazás los elementos mayores una posición a la derecha
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // insertás el elemento en su posición correcta
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
