let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#reset-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');



const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  boxes.forEach((box) => {
    enableBoxes();
    box.innerText = '';
    box.disabled = false;
  });
  trurn0 = true;
};

const disabledBoxes = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].disabled = true;
    }
};



boxes.forEach((box) => {
  box.addEventListener('click', () => {
    console.log('box clicked');
    if (trurn0) {
      box.innerText = 'X';
      trurn0 = false;
    }
    else {
      box.innerText = 'O';
      trurn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let i = 0; i < winPatterns.length; i++) {
    let [a, b, c] = winPatterns[i];
    if (boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText && boxes[a].innerText !== '') {
      alert(`${boxes[a].innerText} is the winner!`);
      resetGame();
      showMsg(`${boxes[a].innerText} is the winner!`);
      msgContainer.removeAttribute('hide');
    }
  }
}

newGameBtn.addEventListener('click', () => {
    resetGame();
    msgContainer.setAttribute('hide', '');
    });

resetBtn.addEventListener('click', () => {  
    resetGame();
    msgContainer.setAttribute('hide', '');
    }
);

console.log('Check if all necessary requirements are met');
console.error('Check for any syntax errors');
console.warn('Check logic and flow of the code');
