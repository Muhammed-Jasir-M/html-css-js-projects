const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const resetBtn = document.getElementById("resetBtn");
const winConditions = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

let currentPlayer = "X";
let options = ["", "", "", "", "", "", "", "", ""];
let running = false;

startGame();

function startGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    resetBtn.addEventListener("click", resetGame);
    statusText.textContent = ` ${currentPlayer}'s Turn`;
    running = true;
}

function cellClicked() {

    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);

    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = ` ${currentPlayer}'s Turn`;
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const conditions = winConditions[i];

        const cellA = options[conditions[0]];
        const cellB = options[conditions[1]];
        const cellC = options[conditions[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }


    if(roundWon) {
        statusText.textContent = `${currentPlayer} WON!!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = "Draw";
        running = false;
    }
    else{
        changePlayer();

    }

}

function resetGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = ` ${currentPlayer}'s Turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}