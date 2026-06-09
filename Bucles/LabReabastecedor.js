function parseShipment(rawData) {
    return rawData.map((linea) => {
    let partes = linea.split(',');
    return {
        sku: partes[0],
        name: partes[1],
        qty: Number(partes[2]),        // test 5: convertir a número
        expires: partes[3],
        zone: partes[4] || "general"   // test 4: si no hay zone, "general"
    };
})}