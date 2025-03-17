// CPU random choice function

let randomNumber = Math.floor(Math.random() * 3);

function getComputerChoice() {

    if (randomNumber === 0) {
        return ' CPU played Rock!';
    } else if (randomNumber === 1) {
        return 'CPU played Paper!';
    } else {
        return 'CPU played Scissors!';
    }
}

// Human choice function

let humanChoice = prompt("Pick your gesture! (Rock, Paper or Scissors)").toLowerCase();

function getHumanChoice() {

    if (humanChoice === "rock") {
        return "You played Rock";
    } else if (humanChoice === "paper") {
        return "You played Paper";
    } else {
        return "You played Scissors!";
    }
};
console.log(getHumanChoice());
console.log(getComputerChoice());