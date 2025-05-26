function getComputerChoice() {
  let randomNumber = Math.random() ;
  if (randomNumber <= .33) {
    return 'rock';
  } else if (randomNumber <=.67) {
    return 'paper';
  } else { 
    return 'scissors';
  }
}

function getHumanChoice() {
  let userChoice = prompt('Rock, Paper, or Scissors?');
  if (!userChoice) return null;

  userChoice = userChoice.toLowerCase().trim();

  if (userChoice === 'rock' || 
      userChoice === 'paper' || 
      userChoice === 'scissors') {
    return userChoice;
  } else {
    return null;
  }
}

function playGame() {
  let humanScore = 0
  let computerScore = 0

  function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
      console.log('It\'s a tie!');
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
      humanScore++; //Human Wins +1
      console.log(`You Win ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++; //Computer Wins +1
      console.log(`You Lose ${computerChoice} beats ${humanChoice}`);
    }
  }

  for ( let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human Score ${humanScore} - Computer Score ${computerScore}`);
  }

    console.log('Game Over!')
    if (humanScore > computerScore) {
      console.log('You Win!');
      console.log(`Human Score ${humanScore} - Computer Score ${computerScore}`)
    } else if (humanScore < computerScore) {
      console.log('You Lose!');
      console.log(`Human Score ${humanScore} - Computer Score ${computerScore}`);
    } else {
      console.log('It\'s a tie!');
      console.log(`Human Score ${humanScore} - Computer Score ${computerScore}`);
    }

}

playGame();