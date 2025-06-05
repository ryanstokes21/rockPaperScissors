let humanScore = 0
let computerScore = 0

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

let humanScore = 0
let computerScore = 0
const results = document.querySelector('#results')

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    results.textContent = 'It\'s a tie!';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    humanScore++; //Human Wins +1
    results.textContent = `You Win ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++; //Computer Wins +1
    results.textContent = `You Lose ${computerChoice} beats ${humanChoice}`;
  }
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
  let humanChoice = 'rock';
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
  let humanChoice = 'paper';
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
  let humanChoice = 'scissors';
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

 
