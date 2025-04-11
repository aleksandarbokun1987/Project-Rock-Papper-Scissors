// Global scope variables
let humanScore = 0;
let computerScore = 0;

// Computer choice function (simplified)

function getComputerChoice() {

    const rpsArray = ['rock', 'paper', 'scissors'];
    const randomPick = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[randomPick];

};

// Human choice function (will be set by event listeners)
let humanChoice = null;

const choiceButtons = document.querySelectorAll('.btn');

choiceButtons.forEach(button => {
    button.addEventListener('click', function () {
        const choice = this.value; // 'this' refers to the clicked button
        setHumanChoice(choice);
    });
});

// Function to handle human choice from button click
function setHumanChoice(choice) {
    humanChoice = choice;
    playRound(); // Call playRound after the human makes a choice
}

// Gameplay logic function
function playRound() {
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}, human wins!`);
    } else {
        computerScore++;
        console.log(`${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}, CPU wins!`);
    }

    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);

    // Reset humanChoice for the next round
    humanChoice = null;

    // Check for game end after each round
    if (humanScore >= 5 || computerScore >= 5) {
        announceWinner();
    }
}

// Winner announcement
function announceWinner() {
    if (computerScore > humanScore) {
        console.log("Sorry, CPU wins the game");
    } else if (humanScore > computerScore) {
        console.log("Congrats you won the game");
    } else {
        console.log("It's a tie game!");
    }
    // Optionally disable buttons after the game ends
}