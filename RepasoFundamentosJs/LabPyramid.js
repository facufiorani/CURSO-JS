function pyramid(string, num, bool) {
  const totalWidth = 2 * num - 1;
  let result = "\n";

  if (!bool) {
    for (let i = 1; i <= num; i++) {
      const strings = 2 * i - 1;
      const spaces = (totalWidth - strings) / 2;
      result += " ".repeat(spaces) + string.repeat(strings) + "\n";
    }
  } else {
    for (let i = num; i >= 1; i--) {
      const strings = 2 * i - 1;
      const spaces = (totalWidth - strings) / 2;
      result += " ".repeat(spaces) + string.repeat(strings) + "\n";
    }
  }

  return result;
}
