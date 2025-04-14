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

// Adding DIV for result display

const createDiv = document.createElement('div');
createDiv.classList.add('container');
createDiv.setAttribute('style', 'background: yellow;');
createDiv.textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;
document.body.appendChild(createDiv);

// Gameplay logic function
function playRound() {
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        createDiv.textContent = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        createDiv.textContent = `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}, human wins!`;
    } else {
        computerScore++;
        createDiv.textContent = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}, CPU wins!`;
    }

    // Update the score in the DIV
    createDiv.textContent += ` | Score - Human: ${humanScore}, Computer: ${computerScore}`;

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
        createDiv.textContent = "Sorry, CPU wins the game";
    } else if (humanScore > computerScore) {
        createDiv.textContent = "Congrats you won the game";
    } else {
        createDiv.textContent = "It's a tie game!";
    }
}