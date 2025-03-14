let num = Math.floor(Math.random() * 3);

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


let choice = prompt('Your choice', getComputerChoice(num));

function getHumanChoice(choice) {
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice(choice));