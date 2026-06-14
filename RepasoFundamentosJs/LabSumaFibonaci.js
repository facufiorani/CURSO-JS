function sumFibs(num) {
  const sequence = [0, 1];
  let i = 2;
  while (true) {
    const next = sequence[i - 1] + sequence[i - 2];
    if (next > num) break;
    sequence.push(next);
    i++;
  }

  let total = 0;
  for (const n of sequence) {
    if (n % 2 !== 0) {
      total += n;
    }
  }
  return total;
}
