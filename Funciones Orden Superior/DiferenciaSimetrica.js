function diffArray(arr1, arr2) {
  const soloEnArr2 = arr2.filter((element) => !arr1.includes(element));
  const soloEnArr1 = arr1.filter((element) => !arr2.includes(element));
  const res = soloEnArr1.concat(soloEnArr2);
  return res;
}
