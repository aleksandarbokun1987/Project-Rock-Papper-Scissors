// Rock paper scissors game

// Variables
let num = Math.floor(Math.random() * 3);
let choice = prompt('Your choice', getComputerChoice(num));
humanScore = 0;
computerScore = 0;

// Function to  get random computers choice
function getComputerChoice(num) {

    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice(num));

// Function that prompts human user for valid value to be returned
function getHumanChoice(choice) {
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getHumanChoice(choice));

// Function to keep track of the score

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice(num) === )
}