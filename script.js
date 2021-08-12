
function isSafe(board,r,c,no){


    //not repeating in the same row or column 
    for(var i=0;i<9;i++){
        if(board[i][c]==no || board[r][i]==no){
            return false;
        }
    }
    //subgrid
    var sx = r - r%3;
    var sy = c - c%3;

    for(var x=sx;x<sx+3;x++){
        for(var y=sy;y<sy+3;y++){
            if(board[x][y]==no){
                return false;
            }
        }
    }

    return true;
}

function solveSudokuHelper(board,r,c){

    //base case 
    if(r==9){
        changeBoard(board);
        return true;
    }
    //other cases 
    if(c==9){
        return solveSudokuHelper(board,r+1,0);
    }
    //pre-filled cell, skip it
    if(board[r][c]!=0){
        return solveSudokuHelper(board,r,c+1);
    }

    //there is 0 in the current location
    for(var i=1;i<=9;i++){

        if(isSafe(board,r,c,i)){
            board[r][c] = i;
            var success = solveSudokuHelper(board,r,c+1);
            if(success==true){
                return true;
            }
            //backtracking step
            board[r][c] = 0;
        }

    }
    return false;

}

function solveSudoku(board) {
    solveSudokuHelper(board,0,0);
}


solve.onclick = function () {
    solveSudoku(board)
}