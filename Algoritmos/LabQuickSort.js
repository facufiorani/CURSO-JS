function quicksort(arr) {
  if (arr.length <= 1) return arr; // caso base

  const pivot = arr[arr.length - 1]; // elegís el último como pivote
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
