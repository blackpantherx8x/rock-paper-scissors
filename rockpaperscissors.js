const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultDisplay = document.querySelector('#result');
const gameResultDisplay = document.querySelector('#game-result');

let playerScore = 0;
let computerScore = 0;

// Function to generate a random choice for the computer

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of the game

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function updateResult(roundResult) {
  if (roundResult === 'tie') {
    resultDisplay.textContent = "It's a tie!";
    resultDisplay.classList.remove('winner', 'loser');
    resultDisplay.classList.add('tie');
  } else if (roundResult === 'win') {
    resultDisplay.textContent = 'You win!';
    resultDisplay.classList.remove('tie', 'loser');
    resultDisplay.classList.add('winner');
  } else {
    resultDisplay.textContent = 'Computer wins!';
    resultDisplay.classList.remove('tie', 'winner');
    resultDisplay.classList.add('loser');
  }
}

function updateGameResult() {
  if (playerScore === 5) {
    gameResultDisplay.textContent = 'Congratulations, you win the game!';
    gameResultDisplay.classList.add('winner');
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    gameResultDisplay.textContent = 'Sorry, you lost the game. Better luck next time!';
    gameResultDisplay.classList.add('loser');
    playerScore = 0;
    computerScore = 0;
  }
}

function resetGameResult() {
  gameResultDisplay.classList.remove('winner', 'loser');
  gameResultDisplay.textContent = '';
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

function handleClick(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  const roundResult = playRound(playerSelection, computerSelection);

  if (roundResult === 'win') {
    playerScore++;
  } else if (roundResult === 'lose') {
    computerScore++;
  }

  updateScore();
  updateResult(roundResult);
  updateGameResult();
}

function init() {
  buttons.forEach(button => button.addEventListener('click', handleClick));
}

function reset() {
  buttons.forEach(button => button.removeEventListener('click', handleClick));
  resetGameResult();
  resetScore();
  init();
}

init();