// Tic-Tac-Toe Game Logic

// Game Variables
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

// Winning Combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to handle each move
function makeMove(index) {
  if (board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    
    if (checkWin()) {
      const messges = alert("Player " + currentPlayer + " wins!");
      resetGame();
      
      return messges;

    }
    
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// Function to check if a player has won
function checkWin() {
  for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
  return false;
}

// Function to reset the game
function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
}
