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

    for (let c = 0; c < nCol; c++) {
        for (let r = 0; r < nRow - 3; r++) {  // Kollar inte de tre sista kolumnerna eftersom vi söker efter fyra i rad
            let currentCoin = document.getElementById(`${r}${c}`).style.backgroundColor;

            if (currentCoin !== "" &&  // Kollar om det finns en färg
                currentCoin === document.getElementById(`${r + 1}${c}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${r + 2}${c}`).style.backgroundColor &&
                currentCoin === document.getElementById(`${r + 3}${c}`).style.backgroundColor) {
                // Om alla fyra har samma färg, så är det en vinnare


                return currentCoin;  // Retur för att indikera vinnaren
            }
        }
    }

}