function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // asumís que el mínimo es el elemento actual

    // buscás el mínimo en el resto del array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // si encontraste un mínimo distinto, lo intercambiás
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
