const rpsArray = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let firstGame = true;
let bigText = document.querySelector('h1');
let scoreText;
let restartBtn;
let secondline = document.querySelector('.secondline');

function getComputerChoice() {
    return(rpsArray[Math.floor(Math.random()*rpsArray.length)]);
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if(firstGame) {
        firstGame = false;
        scoreText = document.createElement('p');
        scoreText.innerText = `${humanScore} - ${computerScore}`;
        scoreText.style.color = "white";
        scoreText.style.fontFamily = "Arial";
        scoreText.style.fontSize = "30px";
        scoreText.style.marginLeft = '130px';
        secondline.appendChild(scoreText);
        document.body.style.gap = "49px";
        restartBtn = document.createElement('input');
        restartBtn.setAttribute('type', 'button');
        restartBtn.style.width = '100px';
        restartBtn.style.height = '33px';
        restartBtn.setAttribute('value', 'Restart');
        restartBtn.style.fontSize = "15px";
        secondline.appendChild(restartBtn);
        restartBtn.addEventListener('click', restartGame);
    }

    if (humanChoice === computerChoice) {
        bigText.innerText = `Draw: ${humanChoice} - ${computerChoice}`;
    }

    else if(humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            bigText.innerText = `Computer Wins: ${computerChoice} - ${humanChoice}`;
        }
        else {
            humanScore++;
            bigText.innerText = `You Win: ${humanChoice} - ${computerChoice}`;
        }
    }

    else if(humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            bigText.innerText = `Computer Wins: ${computerChoice} - ${humanChoice}`;
        }
        else {
            humanScore++;
            bigText.innerText = `You Win: ${humanChoice} - ${computerChoice}`;
        }
    }

    else {
        if (computerChoice === 'rock') {
            computerScore++;
            bigText.innerText = `Computer Wins: ${computerChoice} - ${humanChoice}`;
        }
        else {
            humanScore++;
            bigText.innerText = `You Win: ${humanChoice} - ${computerChoice}`;
        }
    }

    scoreText.innerText = `${humanScore} - ${computerScore}`;

    if(humanScore === 5) {
        bigText.innerText = "You Win The Game!";
        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;
    }

    if(computerScore === 5) {
        bigText.innerText = "Computer Wins The Game!";
        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;
    }
}

function restartGame() {
    computerScore = 0;
    humanScore = 0;
    scoreText.innerText = `${humanScore} - ${computerScore}`;
    rockbtn.disabled = false;
    paperbtn.disabled = false;
    scissorsbtn.disabled = false;
    bigText.innerText = "Pick One";
}

let rockbtn = document.querySelector('.rockbtn');
let paperbtn = document.querySelector('.paperbtn');
let scissorsbtn = document.querySelector('.scissorsbtn');

rockbtn.addEventListener('click', () => playRound('rock'));
paperbtn.addEventListener('click', () => playRound('paper'));
scissorsbtn.addEventListener('click', () => playRound('scissors'));
