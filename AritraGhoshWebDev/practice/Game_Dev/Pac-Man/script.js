// board - 21 rows x 19 cols 
// each tile 32px x 32px
// height = 21 x 32
// width = 19 x 32
let board;
const rowCount = 21;
const colCount = 19;
const tileSize = 32;
const boardWidth = colCount*tileSize;
const boardHeight = rowCount*tileSize;
let context;

//images
let blueGhostImg;
let orangeGhostImg;
let pinkGhostImg;
let redGhostImg;
let pacmanUpImg;
let pacmanDownImg;
let pacmanLeftImg;
let pacmanRightImg;
let pacmanCloseImg;
let wallImg;


// when our page loads
window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d") //used for drawing on the board

    loadImages();
    loadMap();
    // console.log(walls.size);
    // console.log(foods.size);
    // console.log(ghosts.size);
    update();
    document.addEventListener("keydown", movePacman);
}
//X = wall, O = skip, P = pac man, ' ' = food
//Ghosts: b = blue, o = orange, p = pink, r = red
const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

// since there are multiple walls, foods and ghosts we will be using Sets
// Sets are data structures similarly to arrays except addition and deletion are easier
const walls = new Set();
const foods = new Set();
const ghosts = new Set();
let pacman;

function loadImages() {
    wallImg = new Image();
    wallImg.src = "./img/wall.png";

    blueGhostImg = new Image();
    blueGhostImg.src = "./img/blueGhost.png";

    orangeGhostImg = new Image();
    orangeGhostImg.src = "./img/orangeGhost.png";

    pinkGhostImg = new Image();
    pinkGhostImg.src = "./img/pinkGhost.png";

    redGhostImg = new Image();
    redGhostImg.src = "./img/redGhost.png";

    pacmanUpImg = new Image();
    pacmanUpImg.src = "./img/pacmanUp.png";

    pacmanDownImg = new Image();
    pacmanDownImg.src = "./img/pacmanDown.png";

    pacmanLeftImg = new Image();
    pacmanLeftImg.src = "./img/pacmanLeft.png";

    pacmanRightImg = new Image();
    pacmanRightImg.src = "./img/pacmanRight.png";

    pacmanCloseImg = new Image();
    pacmanCloseImg.src = "./img/pacmanClose.png";
}

function loadMap() {
    walls.clear();
    foods.clear();
    ghosts.clear();

    for(let r = 0; r < rowCount; r++) {
        for(let c = 0; c < colCount; c++) {
            const row = tileMap[r];
            const tileMapChar = row[c];

            const x = c*tileSize;
            const y = r*tileSize;

            switch(tileMapChar) {
                case 'X': { // block wall
                    const wall = new Block(wallImg, x, y, tileSize, tileSize);
                    walls.add(wall);
                    break;
                }
                case 'b': { // blue ghost
                    const ghost = new Block(blueGhostImg, x, y, tileSize, tileSize);
                    ghosts.add(ghost);
                    break;
                }
                case 'o': { // orange ghost
                    const ghost = new Block(orangeGhostImg, x, y, tileSize, tileSize);
                    ghosts.add(ghost);
                    break;
                }
                case 'p': { // pink ghost
                    const ghost = new Block(pinkGhostImg, x, y, tileSize, tileSize);
                    ghosts.add(ghost);
                    break;
                }
                case 'r': { // red ghost
                    const ghost = new Block(redGhostImg, x, y, tileSize, tileSize);
                    ghosts.add(ghost);
                    break;
                }
                case 'P': { // pacman
                    pacman = new Block(pacmanRightImg, x, y, tileSize, tileSize);
                    break;
                }
                case ' ': { // food
                    const food = new Block(null, x+14, y+14, 4, 4);
                    foods.add(food);
                }
            }
        }
    }
}

function update() {
    move();
    draw();
    setTimeout(update, 50);
    // setInterval(func, 50) - calls every 50ms, tiles can overlap from move&draw action causing issue
    // setTimeout(update, 50) - wait till move&draw finishes and then calls next frame.
    // requestAnimationFrame - depends on computer
    // 20FPS -> 1000ms/20 = 50ms
}

function draw() {
    context.clearRect(0, 0, board.width, board.height);
    context.drawImage(pacman.image, pacman.x, pacman.y, pacman.width, pacman.height);

    ghosts.forEach(ghost => {
        context.drawImage(ghost.image, ghost.x, ghost.y, ghost.width, ghost.height);
    });

    walls.forEach(wall => {
        context.drawImage(wall.image, wall.x, wall.y, wall.width, wall.height);
    });

    context.fillStyle = "white";
    foods.forEach(food => {
        context.fillRect(food.x, food.y, food.width, food.height);
    });
}

function move() {
    pacman.x += pacman.velocityX;
    pacman.y += pacman.velocityY;

    // check for collisions
    for(let wall of walls.values()) {
        if(collision(pacman, wall)) {
            pacman.x -= pacman.velocityX;
            pacman.y -= pacman.velocityY;
            break;
        }
    }
}

function movePacman(e) {
    switch(e.code) {
        case "ArrowUp":
        case "KeyW": pacman.updateDirection('U'); break;
        case "ArrowDown":
        case "KeyS": pacman.updateDirection('D'); break;
        case "ArrowLeft":
        case "KeyA": pacman.updateDirection('L'); break;
        case "ArrowRight":
        case "KeyD": pacman.updateDirection('R'); 
    }

    // update pacman images
    switch(pacman.direction) {
        case 'U': pacman.image = pacmanUpImg; break;
        case 'D': pacman.image = pacmanDownImg; break;
        case 'L': pacman.image = pacmanLeftImg; break;
        case 'R': pacman.image = pacmanRightImg; 
    }
}

function collision(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

class Block {
    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.startX = x;
        this.startY = y;

        this.direction = 'R';
        this.velocityX = 0;
        this.velocityY = 0;

    }
    
    updateDirection(direction) {
        const prevDirection = this.direction;
        this.direction = direction;
        this.updateVelocity();
        this.x += this.velocityX;
        this.y += this.velocityY;

        for(let wall of walls.values()) {
            if(collision(this, wall)) {
                this.x -= this.velocityX;
                this.y -= this.velocityY;
                this.direction = prevDirection;
                this.updateVelocity();
                return;
            }
        }
    }

    updateVelocity() {
        switch(this.direction) {
            case 'U': {
                this.velocityX = 0;
                this.velocityY = -tileSize/4;
                break;
            }
            case 'D': {
                this.velocityX = 0;
                this.velocityY = tileSize/4;
                break;
            }
            case 'L': {
                this.velocityX = -tileSize/4;
                this.velocityY = 0;
                break;
            }
            case 'R': {
                this.velocityX = tileSize/4;
                this.velocityY = 0;
            }
        }
    }
}