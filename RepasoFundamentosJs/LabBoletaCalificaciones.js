function getAverage(array) {
  let total = 0;
  let cantidad = array.length;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / cantidad;
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

function getGrade(score) {
  switch (true) {
    case score === 100:
      return "A+";
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    default:
      return "F";
  }
}

function hasPassingGrade(puntaje) {
  if (getGrade(puntaje) === "F") {
    return false;
  }
  return true;
}

function studentMsg(array, puntaje) {
  const promedio = getAverage(array);
  const puntuacion = getGrade(puntaje);
  if (puntuacion !== "F") {
    return `Class average: ${promedio}. Your grade: ${puntuacion}. You passed the course.`;
  }
  return `Class average: ${promedio}. Your grade: ${puntuacion}. You failed the course.`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
