let playerOne = "blue";
let playerTwo = "red";

let currentPlayer = playerOne;

let nRow = 6;
let nCol = 7;


function loadTable() {
    for (let r = 0; r < nRow; r++) {
        for (let c = 0; c < nCol; c++) {
            let coins = document.createElement("div");
            coins.id = r.toString() + c.toString();
            coins.classList.add("coins");
            document.getElementById("table").appendChild(coins);
        }
    }
}