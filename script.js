document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const messageContainer = document.querySelector(".mes-conatainer");
  const message = document.querySelector("#message");
  const newGameBtn = document.querySelector("#new-btn");
  const resetBtn = document.querySelector("#reset-btn");

  let currentPlayer = "X";
  let isGameActive = true;
  let moves = 0;

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

  const handleBoxClick = (e) => {
    const box = e.target;
    const boxIndex = Array.from(boxes).indexOf(box);

    if (box.innerText === "" && isGameActive) {
      box.innerText = currentPlayer;
      moves++;

      if (checkWin(currentPlayer)) {
        endGame(false);
        message.innerText = `Player ${currentPlayer} wins!`;
      } else if (moves === 9) {
        endGame(true);
        message.innerText = "It's a draw!";
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.innerText = `${currentPlayer}'s turn`;
      }
    }
  };

  const checkWin = (player) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      let matchCount = 0;
      for (let j = 0; j < winningCombinations[i].length; j++) {
        if (boxes[winningCombinations[i][j]].innerText === player) {
          matchCount++;
        }
      }
      if (matchCount === 3) {
        return true;
      }
    }
    return false;
  };

  const endGame = (isDraw) => {
    isGameActive = false;
    if (isDraw) {
      message.innerText = "It's a draw!";
    }
    messageContainer.classList.remove("hide");
  };

  const startNewGame = () => {
    currentPlayer = "X";
    isGameActive = true;
    moves = 0;
    message.innerText = `${currentPlayer}'s turn`;
    messageContainer.classList.add("hide");
    boxes.forEach((box) => {
      box.innerText = "";
    });
  };

  resetBtn.addEventListener("click", startNewGame);
  newGameBtn.addEventListener("click", startNewGame);
  boxes.forEach((box) => {
    box.addEventListener("click", handleBoxClick);
  });
});
