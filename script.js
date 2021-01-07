

const gameBoard = (() => {  //As I only need one gameBoard object, I am using a module
    let board = ['x','x','x','-','-','-','o','-','o'];  //an array inside the gameBoard object which stores the actual Gameboard
    return {board};
})();


//Need multiple players, so I will use a factory instead of a module
const player = (marker) => {
    const playerMarker = marker;
};

//Need one displayController, an object that will control the flow of the game, so I'll use a module



const displayController = (() => {

})();



//I had left this project for a few weeks, after coming back I was kinda lost on syntax but a bit of googling set me straight :) and thus I could write this function :)
function renderBoard(){
    var cell;
    for(var i = 0;i<gameBoard.board.length;i++){
        
        cell = document.querySelector(`#c${i}`);
        cell.textContent = gameBoard.board[i];
    }
}
renderBoard();