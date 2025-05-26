function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 30) + 1;
  if (randomNumber <= 10) {
    return('Rock!');
  }

  else if (randomNumber <= 20) {
    return('Paper!');
  }

  else { 
    return('Scissors!');
  }
}
console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt('Rock, Paper, or Scissors?');
    humanChoice = humanChoice.toLowerCase();
    return(humanChoice);
}

console.log(getHumanChoice());

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

}