

const gameBoard = (() => {  //As I only need one gameBoard object, I am using a module
    let board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];  //an array inside the gameBoard object which stores the actual Gameboard
    let currentMarker  = 'x';

    const checkStatus = () => {
        if( (board[0] == board [1]) && (board[1] == board [2]) && (board[0] != ' ') ){
            return `${board[0]} has won!`;
        }else if ((board[3] == board [4]) && (board[4] == board [5]) && (board[3] != ' ')){
            return `${board[3]} has won!`;
        }else if ((board[6] == board [7]) && (board[7] == board [8]) && (board[6] != ' ')){
            return `${board[6]} has won!`;
        }else if ((board[0] == board [3]) && (board[3] == board [6]) && (board[0] != ' ')){
            return `${board[0]} has won!`;
        }else if ((board[1] == board [4]) && (board[4] == board [7]) && (board[1] != ' ')){
            return `${board[1]} has won!`;
        }else if ((board[2] == board [5]) && (board[5] == board [8]) && (board[2] != ' ')){
            return `${board[2]} has won!`;
        }else if ((board[0] == board [4]) && (board[4] == board [8]) && (board[0] != ' ')){
            return `${board[0]} has won!`;
        }else if ((board[2] == board [4]) && (board[4] == board [6]) && (board[2] != ' ')){
            return `${board[2]} has won!`;
        }

        let done = true;
        for(let i = 0; i<board.length;i++){
            if(board[i] == ' '){
                done = false;
            }
        }

        if(done == true){
            return 'Tie !';
        }
    }
    const renderBoard = () => {
        let cell;
        for(let i = 0;i<board.length;i++){
        
            cell = document.querySelector(`#c${i}`);
            cell.textContent = board[i];
        }
    }

    function placeMarker(that, marker) {
        console.log(that);
        console.log(marker);

    }

    //took some work but I was finnaly able to attach event listeners.
    const setup = () => {
        
        renderBoard();
        let cell;
        for(let i = 0;i<board.length;i++){
        
            cell = document.querySelector(`#c${i}`);
            cell.addEventListener('click', () => {

                    if(board[i] != ' '){
                        alert('choose some other cell!');
                        return;
                    }
                    board[i] = currentMarker;
                    renderBoard();
                    
                    if(currentMarker == 'x'){
                        currentMarker = 'o';
                    }else{
                        currentMarker = 'x';
                    }
                    let result = checkStatus();
                    if(result != undefined){
                        alert(result);
                        currentMarker = 'x';
                         for(let i = 0 ;i<board.length;i++){ // will chuck this part into onlick handler for a button which restarts
                            board[i] = ' ';
                        }
                        renderBoard();
                    }
                    
            });
        }

    }
    return {setup};
})();


//Need multiple players, so I will use a factory instead of a module
const player = (marker) => {
    const playerMarker = marker;
};






/*
//I had left this project for a few weeks, after coming back I was kinda lost on syntax but a bit of googling set me straight :) and thus I could write this function :)
function renderBoard(){
    var cell;
    for(var i = 0;i<gameBoard.board.length;i++){
        
        cell = document.querySelector(`#c${i}`);
        cell.textContent = gameBoard.board[i];
    }
}

// Came back after a month of writing the above and put it inside the displayController module, got it working after a few mins :)
*/
gameBoard.setup();