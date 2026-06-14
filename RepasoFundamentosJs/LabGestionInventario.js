let inventory = [];
function findProductIndex(nombre) {
  return inventory.findIndex(
    (product) => product.name === nombre.toLowerCase(),
  );
}

function addProduct(product) {
  const indice = findProductIndex(product.name);
  if (indice !== -1) {
    inventory[indice].quantity += product.quantity;
    console.log(product.name.toLowerCase() + " quantity updated");
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(product.name.toLowerCase() + " added to inventory");
  }
}

function removeProduct(nombre, cantidad) {
  const indice = findProductIndex(nombre);
  if (indice === -1) {
    console.log(nombre.toLowerCase() + " not found");
    return;
  }
  const product = inventory[indice];
  if (product.quantity < cantidad) {
    console.log(
      `Not enough ${product.name} available, remaining pieces: ${product.quantity}`,
    );
    return;
  }
  product.quantity -= cantidad;
  if (product.quantity === 0) {
    inventory.splice(indice, 1);
  } else {
    console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
  }
}
