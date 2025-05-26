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
//console.log(getComputerChoice());

function getHumanChoice() {
  let userChoice = prompt('Rock, Paper, or Scissors?');
  if (userChoice === 'rock' || 
      userChoice === 'paper' || 
      userChoice === 'scissors') {
    return userChoice;
  } else {
    return null;
  }
}

//console.log(getHumanChoice());

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);