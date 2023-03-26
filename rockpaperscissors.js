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

  // Function to play the game
function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt('Enter your choice (rock/paper/scissors):').toLowerCase();
      const computerSelection = computerPlay();
      console.log(`Round ${round}: ${playRound(playerSelection, computerSelection)}`);
  
      if (playRound(playerSelection, computerSelection) === 'You win!') {
        playerScore++;
      } else if (playRound(playerSelection, computerSelection) === 'Computer wins!') {
        computerScore++;
      }
  
      console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    }
  
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (computerScore > playerScore) {
      console.log('Computer wins the game!');
    } else {
      console.log('The game is tied!');
    }
  }
  
  // Start the game
  game();
