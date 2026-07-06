function dfs(graph, root) {
    const stack = [root]
    const visited = []
    while (stack.length > 0) {
        const node = stack.pop()
        if (!visited.includes(node)) {
            visited.push(node)
            for (let j = 0; j < graph[node].length; j++) {
                if (graph[node][j] === 1){
                    stack.push(j)
                }
            }
        }
    }
    return visited
}