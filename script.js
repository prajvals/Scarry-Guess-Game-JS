'use strict';
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let checkButton = document.querySelector('.check');
let message = document.querySelector('.message');
let inputNumber;

checkButton.addEventListener('click', function () {
  inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber);
});

function checkWithRandomNumber(inputNumber) {
  if (randomNumber === inputNumber) {
    message.textContent = 'Yea you guessed it right';
  } else if (randomNumber > inputNumber) {
    message.textContent = 'Input Number is too low';
  } else {
    message.textContent = 'Input Number is too high';
  }
}
