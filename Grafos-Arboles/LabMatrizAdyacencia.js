function adjacencyListToMatrix(adjacencyList) {
    const n = Object.keys(adjacencyList).length;
    const matrix = []
    for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0))
    }
    for (const node in adjacencyList) {
        for (const neighbor of adjacencyList[node]){
            matrix[node][neighbor] = 1;
        }
    }
    for (const row of matrix) {
        console.log(row);
    }
    return matrix
}

console.log(adjacencyListToMatrix({ 0: [1, 2], 1: [2], 2: [0, 3], 3: [2] }));
