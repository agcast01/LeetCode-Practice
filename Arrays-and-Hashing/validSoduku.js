var isValidSudoku = function(board) {
    let used = new Set()
    function checkSquare(i, j, board) {
        let checked = new Set()
        for(let x = 0; x < 3; x++) {
            for(let y = 0; y < 3; y++){
                if(checked.has(board[i+x][j+y])){
                    return false
                }
                if(board[i + x][j + y] !== '.')checked.add(board[i+x][j+y])
            }
        }
        return true
    }
    
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {   
            if(used.has(board[i][j])) return false
            
            if(board[i][j] !== '.')used.add(board[i][j])

            if(i % 3 === 0 && j % 3 === 0) {
                if(!checkSquare(i, j, board)) return false
            }
        }
        used.clear()
    }

    for(let j = 0; j < 9; j++) {
        for(let i = 0; i < 9; i++) {
            if(used.has(board[i][j])) return false
            if(board[i][j] !== '.')used.add(board[i][j])
        }
        used.clear()
    }
    return true
};