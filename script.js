'use strict';
let score = 20;
let highestScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const highscoreLable = document.querySelector('.highscore');
const scoreDisplay = document.querySelector('.score');
const againButton = document.querySelector('.again');
const inputNumberElement = document.querySelector('.guess');
const guessLabel = document.querySelector('.number');

checkButton.addEventListener('click', function () {
  let inputNumber = Number(inputNumberElement.value);
  checkWithRandomNumber(inputNumber);
});

function checkWithRandomNumber(inputNumber) {
  if (randomNumber === inputNumber) {
    message.textContent = 'Yea you guessed it right';
    guessLabel.textContent = randomNumber;
    checkForHighestScore();
  } else if (randomNumber > inputNumber) {
    message.textContent = 'Input Number is too low';
    inputNumberElement.value = null;
    score--;
  } else {
    message.textContent = 'Input Number is too high';
    score--;
    inputNumberElement.value = null;
  }
  updateScore();
}

function checkForHighestScore() {
  if (score > highestScore) {
    highestScore = score;
    highscoreLable.textContent = highestScore;
  }
}
function updateScore() {
  if (score > 1) scoreDisplay.textContent = score;
  else scoreDisplay.textContent = ' Game Over ';
}

againButton.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  score = 20;
  inputNumberElement.value = null;
  scoreDisplay.textContent = '20';
  message.textContent = 'Guess the number';
  guessLabel.textContent = '?';
});
