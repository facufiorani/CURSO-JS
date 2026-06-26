function whatIsInAName(array, objeto) {
  return array.filter((obj) => {
    return Object.keys(objeto).every((key) => obj[key] === objeto[key]);
  });
}
