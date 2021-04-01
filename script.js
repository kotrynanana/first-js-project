let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

function getAbsoluteDistance(a, b) {
  return Math.abs(a - b);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if(getAbsoluteDistance(humanGuess,targetNumber) <= getAbsoluteDistance(computerGuess,targetNumber)){
    return true;
  } else {
    return false;
  }
};


const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore++;
  } else {
    computerScore++;
  };
};

const advanceRound = () => {
  currentRoundNumber++;
}