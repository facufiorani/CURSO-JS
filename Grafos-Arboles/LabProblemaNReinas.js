function dfsNQueens(n) {
    if (n<1) {
        return []
    }
    const solutions = [];
    const board = [];
    function isSafe(row, col) {
        for (let r=0; r < row; r++) {
            if (board[r]===col || Math.abs(r - row) === Math.abs(board[r] - col)) {
                return false
            }
        }
        return true
    }
    function dfs(row) {
        if (row ===n) {
            solutions.push([...board]);
            return
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board.push(col)
                dfs(row + 1)
                board.pop()
            }
        }
    }
    dfs(0)
    return solutions
}