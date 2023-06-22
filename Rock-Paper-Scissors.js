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

let computerChoice = getComputerChoice();

let playerSelection = prompt("Rock, Paper, or Scissors?");

let playerChoice = playerSelection.toLowerCase();

function playRound(playerChoice, computerChoice) {
    if(playerChoice === "rock" && computerChoice === "rock") {
        return "It's a draw!";
    }else if(playerChoice === "rock" && computerChoice === "paper") {
        return "You lost this round!";
    }else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You won this round!";
    }else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You won this round!";
    }else if (playerChoice === "paper" && computerChoice === "paper") {
        return "It's a draw!";
    }else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lost this round!";
    }else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lost this round!";
    }else if (playerChoice === "scissors" && computerChoice === "scissors") {
        return "It's a draw!";
    }else  if(playerChoice ==="scissors" && computerChoice === "paper") {
        return "You won this round!";
    }else {
        return "error";
    }
}

function game() {
    computerChoice = getComputerChoice();
    playerSelection = prompt("Rock, Paper, or Scissors?")
    playerChoice = playerSelection.toLowerCase();
    for(let i = 0; i < 5; i++) {
       result = playRound(playerChoice, computerChoice);
       return result;
    }
}