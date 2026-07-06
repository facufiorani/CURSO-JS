function initStack() {
  return {
    collection: [],
  };
}
function push(pila, element) {
  pila.collection.push(element);
}

function pop(pila) {
  return pila.collection.pop();
}
function peek(pila) {
    const indice = pila.collection.length - 1;
    if (indice >= 0) {
        return pila.collection[indice];
    }
    return undefined
}
function isEmpty(pila) {
    if (pila.collection.length === 0) {
        return true;
    }
    return false;
}
function clear(pila) {
    pila.collection = [];
}