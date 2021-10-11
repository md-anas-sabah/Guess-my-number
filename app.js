'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('🚫No number!');

    //When players wins the game
  } else if (guess === secretNumber) {
   displayMessage('🥳Congratulations!!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; // Changing background color after winning.
    document.querySelector('.number').style.width = '30rem'; // Increasing the width of the number box which we have guessed.


    if(score>highScore){
        highScore=score;
        document.querySelector(".highscore").textContent = highScore;
    }
 
    //When guess number is greater.
  }else if(guess !== secretNumber){
    if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ?  '📈Too high!!' : '📉Too low!!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '💥You lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
