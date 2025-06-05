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

const score = document.querySelector('#score');
const results = document.querySelector('#results');

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    results.textContent = 'It\'s a tie!';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    humanScore++; //Human Wins +1
    results.textContent = `You Win ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++; //Computer Wins +1
    results.textContent = `You Lose ${computerChoice} beats ${humanChoice}.`;
  }
  displayScore();
  checkWinner();
}

function displayScore() {
  score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const finalMessage =
      humanScore > computerScore ? 'You won the game!' : 'Computer won the game!';
    results.textContent += `\n${finalMessage}`;

    // Disable all buttons
    document.querySelectorAll('button').forEach((btn) => {
      btn.disabled = true;
    });
  }
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

 
