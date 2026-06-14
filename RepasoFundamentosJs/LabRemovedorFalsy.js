function bouncer(array) {
  let copy = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      copy.push(array[i]);
    }
  }
  return copy;
}
console.log(bouncer([7, "ate", "", false, 9]));
