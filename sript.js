let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    Math.floor(Math.random() * 10)
    return (Math.floor(Math.random() * 10));

}
// Compare Guess
const compareGuesses = (userGuess,computerGuess,secretTargetNumber) => {
 let userValue = getAbsoluteDistance(userGuess, secretTargetNumber);
 let computerValue = getAbsoluteDistance(computerGuess, secretTargetNumber);
 if(userGuess > 9) {
   alert("Out of range! -1 point.")
   false;
 }
 if(userValue > computerValue) {
     return false;
 }else if (userValue <= computerValue) {
   return true;
 }else {
   return 'error';
 }
 
}
// Update Score
const updateScore = (winner) => {
    if(winner === 'human') {
        humanScore++;
    }else if(winner === 'computer') {
        computerScore++;
    }
    
}
// AdvanceRound
const advanceRound = () => {
    currentRoundNumber++;
}
//ABSOLUTE DISTANCE
const getAbsoluteDistance = (numberOne,numberTwo) => {
  return (Math.abs(numberOne-numberTwo));
}
//ALERT WAS MADE IN THE compareGuesses function




