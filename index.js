const playerOne = prompt("Choose color player 1");
const playerTwo = prompt("Choose color player 2");;

document.getElementById("playerOne").innerHTML = playerOne;
document.getElementById("playerTwo").innerHTML = playerTwo;

let currentPlayer = playerOne;

const nRow = 6;
const nCol = 7;

let columns = [5, 5, 5, 5, 5, 5, 5]
let score = { playerOne: 0, playerTwo: 0 }
let gameIsOver = false;

function loadTable() {
    for (let r = 0; r < nRow; r++) {
        for (let c = 0; c < nCol; c++) {
            let coins = document.createElement("div");
            coins.id = r.toString() + c.toString();
            coins.classList.add("coins");
            document.getElementById("table").appendChild(coins);
            coins.addEventListener("click", function () {
                if (gameIsOver) {
                    return;
                }

                let stringRowCol = coins.id;
                let row = parseInt(stringRowCol[0]);
                let col = parseInt(stringRowCol[1]);

                row = columns[col];

                if (row < 0) {
                    return;
                }

                let coin = document.getElementById(`${row}${col}`);
                if (currentPlayer == playerOne) {
                    currentPlayer = playerTwo;
                    coin.style.backgroundColor = playerOne;
                } else if (currentPlayer == playerTwo) {
                    currentPlayer = playerOne;
                    coin.style.backgroundColor = playerTwo;
                }

                columns[col] = columns[col] - 1;


                let winnerPlayer = whoIsWinnerCheck();
                let noWinner = noWinnerPlayer();
                if (winnerPlayer) {
                    gameIsOver = true;
                    document.getElementById("winner").innerHTML = `${winnerPlayer} wins the round!`

                    if (winnerPlayer === playerOne) {
                        score.playerOne = score.playerOne + 1;
                    } else if (winnerPlayer === playerTwo) {
                        score.playerTwo = score.playerTwo + 1;
                    }

                    document.getElementById("blue").innerHTML = `Poäng: ${score.playerOne}`;
                    document.getElementById("red").innerHTML = `Poäng: ${score.playerTwo}`;
                    startGameAgain();
                } else if (noWinner) {
                    document.getElementById("winner").innerHTML = "Draw between players!";
                    startGameAgain();
                }

            });
        }
    }
}

loadTable();

function whoIsWinnerCheck() {

    for (let row = 0; row < nRow; row++) {
        for (let col = 0; col < nCol - 3; col++) {
            let currentCoin = document.getElementById(`${row}${col}`).style.backgroundColor;
            if (currentCoin !== "" &&
                currentCoin === document.getElementById(`${row}${col + 1}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row}${col + 2}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row}${col + 3}`).style.backgroundColor) {

                return currentCoin;
            }
        }
    }

    for (let col = 0; col < nCol; col++) {
        for (let row = 0; row < nRow - 3; row++) {
            let currentCoin = document.getElementById(`${row}${col}`).style.backgroundColor;

            if (currentCoin !== "" &&
                currentCoin === document.getElementById(`${row + 1}${col}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row + 2}${col}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row + 3}${col}`).style.backgroundColor) {

                return currentCoin;
            }
        }
    }

    for (let row = 0; row < nRow - 3; row++) {
        for (let col = 3; col < nCol; col++) {
            let currentCoin = document.getElementById(`${row}${col}`).style.backgroundColor;

            if (currentCoin !== "" &&
                currentCoin === document.getElementById(`${row + 1}${col - 1}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row + 2}${col - 2}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row + 3}${col - 3}`).style.backgroundColor) {

                return currentCoin;
            }
        }
    }

    for (let row = 0; row < nRow - 3; row++) {
        for (let col = 0; col < nCol - 3; col++) {
            let currentCoin = document.getElementById(`${row}${col}`).style.backgroundColor;

            if (currentCoin !== "" &&
                currentCoin === document.getElementById(`${row + 1}${col + 1}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row + 2}${col + 2}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row + 3}${col + 3}`).style.backgroundColor) {
                return currentCoin;
            }
        }
    }

    return

}

function noWinnerPlayer() {
    for (let col = 0; col < nCol; col++) {
        if (columns[col] > 0) {
            return false;
        }
    }
    return true;
}


function startGameAgain() {
    let startButton = document.getElementById("start");
    startButton.style.display = "flex";

    startButton.addEventListener("click", function () {
        columns = [5, 5, 5, 5, 5, 5, 5];
        whoIsWinnerCheck();
        document.getElementById("winner").innerHTML = "";
        currentPlayer = playerOne;
        resetBoard();
        startButton.style.display = "none";
    })
}

function resetBoard() {
    for (let row = 0; row < nRow; row++) {
        for (let col = 0; col < nCol; col++) {
            let coin = document.getElementById(`${row}${col}`);
            coin.style.backgroundColor = "";
        }
    }
    gameIsOver = false;
}


