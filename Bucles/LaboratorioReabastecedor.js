function parseShipment(rawData) {
  return rawData
    .filter((linea, index) => {
      let sku = linea.split(",")[0];
      return rawData.findIndex((l) => l.split(",")[0] === sku) === index;
    })
    .map((linea) => {
      let partes = linea.split(",");
      return {
        sku: partes[0],
        name: partes[1],
        qty: Number(partes[2]),
        expires: partes[3],
        zone: partes[4] || "general",
      };
    });
}

function groupByZone(actions) {
  const array = {};
  for (let accion of actions) {
    let zona = accion.item.zone;
    if (!array[zona]) {
      array[zona] = [];
    }
    array[zona].push(accion);
  }
  return array;
}

function planRestock(pantry, shipment) {
  return shipment.map((item) => {
    if (item.qty <= 0) {
      return { type: "discard", item };
    } else if (pantry.some((p) => p.sku === item.sku)) {
      return { type: "restock", item };
    } else {
      return { type: "donate", item };
    }
  });
}

function clonePantry(pantry) {
  return pantry.map((item) => ({ ...item }));
}

console.log(parseShipment(["SKU001,Arroz,10,2025-12-01,A"]));
const rawData = [
  "SKU001,Arroz,10,2025-12-01,A",
  "SKU002,Sal,5,2025-06-01",
  "SKU003,Aceite,0,2025-03-01,B",
  "SKU001,Arroz,3,2025-12-01,A",
];

const pantry = [
  { sku: "SKU001", name: "Arroz", qty: 2, expires: "2025-12-01", zone: "A" },
  {
    sku: "SKU002",
    name: "Sal",
    qty: 1,
    expires: "2025-06-01",
    zone: "general",
  },
];

const shipment = parseShipment(rawData);
console.log("Shipment:", shipment);

const copia = clonePantry(pantry);
console.log("Copia pantry:", copia);

const acciones = planRestock(copia, shipment);
console.log("Acciones:", acciones);

const resultado = groupByZone(acciones);
console.log(resultado);