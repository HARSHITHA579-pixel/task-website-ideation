// board - 21 rows x 19 cols 
// each tile 32px x 32px
// height = 21 x 32 = 
// width = 19 x 32 =
let board;
const rowCount = 21;
const colCount = 19;
const tileSize = 32;
const boardWidth = colCount*tileSize;
const boardHeight = rowCount*tileSize;
let context;

//images
let blueGhost;
let orangeGhost;
let pinkGhost;
let redGhost;
let pacmanUp;
let pacmanDown;
let pacmanLeft;
let pacmanRight;
let pacmanClose;
let wall;


// when our page loads
window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d") //used for drawing on the board
}