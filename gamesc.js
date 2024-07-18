const rpsArray = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return(rpsArray[Math.floor(Math.random()*rpsArray.length)]);
}

function getHumanChoice() {
    while(true) {
        let response = prompt('Rock, Paper or Scissors');
        if(rpsArray.includes(response)) {
            return response;
        }
    }
}

function playRound() {
    let humanSelect = getHumanChoice();
    let computerSelect = getComputerChoice();

    if(humanSelect.toLowerCase() === computerSelect) {
        return "Draw";
    }

    else if(humanSelect.toLowerCase() === 'rock') {
        if(computerSelect === 'paper') {
            computerScore++;
            return "Computer Wins The Round";
        }
        else {
            humanScore++;
            return "You Win The Round";
        }
    }

    else if(humanSelect.toLowerCase() === 'scissors') {
        if(computerSelect === 'paper') {
            humanScore++;
            return "You Win The Round";
        }
        else {
            computerScore++;
            return "Computer Wins The Round";
        }
    }

    else {
        if(computerSelect === 'rock') {
            humanScore++;
            return "You Win The Round";
        }
        else {
            computerScore++;
            return "Computer Wins The Round";
        }
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if(humanScore > computerScore) {
        console.log(`You win the game ${humanScore} - ${computerScore}!`);
    }
    else if(computerScore > humanScore) {
        console.log(`Computer wins the game ${computerScore} - ${humanScore}!`);
    }
    else {
        console.log(`You draw with the computer ${computerScore} - ${humanScore}!`);
    }
}

document.getElementById('playbtn').onclick = playGame;