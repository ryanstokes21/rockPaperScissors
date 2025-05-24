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
  let answer = prompt('Rock, Paper, or Scissors?');
  if (answer === 'rock') {
    return('Rock!');
  }

  else if (answer === 'paper') {
    return('Paper!');
  }

  else if (answer === 'scissors') {
    return('Scissors!');
  }
  
}



console.log(getHumanChoice());