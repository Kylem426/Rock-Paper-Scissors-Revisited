const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const btnClear = document.getElementById('clear');
const list = document.getElementById('list');
const score = document.getElementById('score');
const winner = document.getElementById('winner');

let playerName = prompt("Who is the challenger?");

let playerScore = 0;
let computerScore = 0;
score.textContent = `${playerName} = ${playerScore} Computer = ${computerScore}`

function getComputerChoice() {
    let random = Math.random();
    if(random <= 0.33) {
        return "rock";
    }else if(random >= 0.34 && random <= 0.66) {
        return "paper";
    }else {
        return "scissors";
    }
}

btnRock.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
}); 

btnPaper.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
});

btnScissors.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
});

function clear() {
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
    score.textContent = `${playerName} = ${playerScore = 0} Computer = ${computerScore = 0}`;
    winner.textContent = " ";
}

btnClear.addEventListener("click", clear);

function youWin() {
    const listItem = document.createElement('li');
    listItem.textContent = "You win!";
    list.appendChild(listItem);
}

function youLose() {
    const listItem = document.createElement('li');
    listItem.textContent = "You lose!";
    list.appendChild(listItem);
}

function aDraw() {
    const listItem = document.createElement('li');
    listItem.textContent = "It's a draw!";
    list.appendChild(listItem);
}

function playRound(playerChoice, computerChoice) {
    if((playerChoice === "rock" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "paper") 
    || (playerChoice === "scissors" && computerChoice === "scissors") ) {
        aDraw();
    }else if((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") 
    || (playerChoice === "scissors" && computerChoice === "rock")) {
        youLose();
        score.textContent = `${playerName} = ${playerScore} Computer = ${computerScore += 1}`;
        checkScore(playerScore, computerScore);
    }else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock")
    || (playerChoice === "scissors" && computerChoice === "paper")) {
        youWin();
        score.textContent = `${playerName} = ${playerScore += 1} Computer = ${computerScore}`;
        checkScore(playerScore, computerScore);
    }else {
        return "error";
    }
}

function checkScore(playerScore, computerScore) {
    if(playerScore === 5) {
        winner.textContent = `${playerName} won the game ${playerScore} points to ${computerScore}!`;
    }else if(computerScore === 5) {
        winner.textContent = `${playerName} lost the game ${playerScore} points to ${computerScore}!`;
    }
}