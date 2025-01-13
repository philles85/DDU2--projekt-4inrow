let playerOne = "blue";
let playerTwo = "red";

let currentPlayer = playerOne;

let nRow = 6;
let nCol = 7;
let columns = [5, 5, 5, 5, 5, 5, 5]


function loadTable() {
    for (let r = 0; r < nRow; r++) {
        for (let c = 0; c < nCol; c++) {
            let coins = document.createElement("div");
            coins.id = r.toString() + c.toString();
            coins.classList.add("coins");
            document.getElementById("table").appendChild(coins);
            coins.addEventListener("click", function () {
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


            });
        }
    }
}

loadTable();
whoIsWinnerCheck();


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

    for (let row = 3; row < nRow; row++) {
        for (let col = 0; col < nCol - 3; col++) {
            let currentCoin = document.getElementById(`${row}${col}`).style.backgroundColor;

            if (currentCoin !== "" &&
                currentCoin === document.getElementById(`${row - 1}${col + 1}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row - 2}${col + 2}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${row - 3}${col + 3}`).style.backgroundColor) {

                return currentCoin;
            }
        }
    }
    console.log(nRow - 3);

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

}