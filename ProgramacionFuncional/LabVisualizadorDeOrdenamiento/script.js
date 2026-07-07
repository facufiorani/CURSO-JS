const arrayContainer = document.getElementById("array-container");
const startingArray = document.getElementById("starting-array");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn")
let currentArray = [];
function generateElement() {
    return Math.floor(Math.random() * 100) + 1;
}
function generateArray() {
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr.push(generateElement());
    }
    return arr;
}

function generateContainer() {
    const container = document.createElement("div");
    return container
}

function fillArrContainer(element, arr) {
    for (let i = 0; i < arr.length; i++) {
        const span = document.createElement("span");
        span.textContent = arr[i]
        element.appendChild(span)
    }
}

function isOrdered(a, b) {
    if (a <= b) {
        return true;
    }
    return false
}
function swapElements(arr, index) {
    if (!isOrdered(arr[index], arr[index + 1])) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    }
}
function highlightCurrentEls(element, index) {
    const hijos = element.children
    hijos[index].style.border = "2px dashed red";
    hijos[index + 1].style.border = "2px dashed red";
}

function handleGenerate() {
  // 1. vaciar los spans viejos de starting-array
    startingArray.innerHTML = "";

    // 2. eliminar los divs de pasos anteriores (dejar solo starting-array)
    while (arrayContainer.children.length > 1) {
        arrayContainer.lastElementChild.remove();
    }

    // 3. generar y dibujar
    currentArray = generateArray();
    fillArrContainer(startingArray, currentArray);
}

function handleSort() {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let j = 0; j < currentArray.length - 1; j++) {
      // 1. resaltar el par que se compara EN EL ÚLTIMO div actual
      highlightCurrentEls(arrayContainer.lastElementChild, j);

      // 2. intercambiar si hace falta (y anotar si hubo intercambio)
      if (!isOrdered(currentArray[j], currentArray[j + 1])) {
        swapped = true;
      }
      swapElements(currentArray, j);

      // 3. crear un div NUEVO con el estado resultante (sin resaltar)
      const container = generateContainer();
      fillArrContainer(container, currentArray);
      arrayContainer.appendChild(container);
    }
  }
}


generateBtn.addEventListener('click', handleGenerate) 
sortBtn.addEventListener("click", handleSort);