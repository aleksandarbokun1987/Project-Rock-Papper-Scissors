


function getComputerChoice(num) {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        console.log('rock');
    } else if (num === 1) {
        console.log('paper');
    } else {
        console.log('scissors');
    }
}
getComputerChoice(num);
