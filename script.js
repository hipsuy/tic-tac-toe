

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
