function reverseString(string) {
  const array = string.split("");
  array.reverse();
  const reverse = array.join("");
  return reverse;
}
