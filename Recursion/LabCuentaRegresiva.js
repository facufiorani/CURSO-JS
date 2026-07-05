function countdown(n) {
  if (n < 1) {
    return [];
  }
  const array = countdown(n - 1);
  array.unshift(n);
  return array;
}
console.log(countdown(2));
