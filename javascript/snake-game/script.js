const gameBoard = document.getElementById("gameBoard");
const context = gameBoard.getContext("2d");
const scoreDisplay = document.getElementById("scoreDisplay");
const resetBtn = document.getElementById("resetBtn");


const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "cyan";
const snakeColor = "green";
const snakeBorder = "white";
const foodColor = "red";
const unitSize = 25;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;

let snake = [

    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }

];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);


gameStart()

function gameStart() {

    running = true;
    scoreDisplay.textContent = score;

    createFood();
    drawFood();
    nextTick();
}

function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            drawSnake();
            moveSnake();
            checkGameOver();
            nextTick();
        }, 100);
    }
    else {
        displayGameOver();
    }
}

function clearBoard() {
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood() {
    function randomFood(min, max) {
        const randNo = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNo;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameHeight - unitSize);

}

function drawFood() {
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    };
    snake.unshift(head);

    if (snake[0].x == foodX && snake[0].y == foodY) {
        score++;
        scoreDisplay.textContent = score;
        createFood();
    }
    else {
        snake.pop();
    }
}

function drawSnake() {
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
}

function changeDirection(event) {
    const keyPressed = event.keyCode;
    // 65,87,68,83

    const Left = 37;
    const Up = 38;
    const Right = 39;
    const Down = 40;


    const goingLeft = (xVelocity == -unitSize);
    const goingUp = (yVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingDown = (yVelocity == unitSize);

    switch (true) {
        case (keyPressed == Left && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0; 
            break;
        case (keyPressed == Up && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            event.preventDefault();
            break;
        case (keyPressed == Right && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == Down && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            event.preventDefault();
            break;
        default:
            

    }
}

function checkGameOver() {
    switch (true) {
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x > gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y > gameHeight):
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
        }

    }
}

function displayGameOver() {
    context.font = "50px MV Boli"
    context.textAlign = "center"
    context.fillStyle = "black";
    context.fillText("GAME OVER!!", gameWidth / 2, gameHeight / 2);
    running = false;
}

function resetGame() {

    running = false;
    xVelocity = unitSize;
    yVelocity = 0;
    score = 0;
    snake = [

        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 }

    ];
    gameStart();
}



