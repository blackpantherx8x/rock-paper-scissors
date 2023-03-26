// Function to generate a random choice for the computer
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'It\'s a tie!';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
