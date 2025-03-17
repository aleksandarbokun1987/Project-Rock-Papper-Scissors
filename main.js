// Global scope variables
let humanScore = 0;
let computerScore = 0;

// Computer choice function
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Human choice function
function getHumanChoice() {
    let choice = prompt('Pick your gesture! (Rock Scissors or Paper').toLowerCase();
    return choice;
}


// Gameplay logic function
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}, human wins!`;
    } else {
        computerScore++;
        return `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}, CPU wins!`;

    }
}
// Function call
console.log(playRound());
console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);