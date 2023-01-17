let buttons = document.querySelectorAll(".buttons > button");
let displayHuman = document.querySelector(".display-human");
let displayComputer = document.querySelector(".display-computer");
let announce = document.querySelector(".announce");
let humanScore = document.querySelector(".human-score");
let computerScore = document.querySelector(".computer-score");

let choices = ["rock", "paper", "scissors"];
let humanScoreCount = 0
let computerScoreCount = 0

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    return choices[randomChoice];
}

function playRound(playerSelection, computerChoice) {
    if (playerSelection == computerChoice) {
        return "draw";
    }
    else if (
        (playerSelection == "rock" && computerChoice == "scissors") ||
        (playerSelection == "paper" && computerChoice == "rock") ||
        (playerSelection == "scissors" && computerChoice == "paper")
    ) {
        return "win";
    }
    else {
        return "lose";
    }
}

function buttonPressed(event) {
    displayHuman.textContent = this.id;
    displayComputer.textContent = getComputerChoice();

    let result = playRound(displayHuman.textContent, displayComputer.textContent);

    announce.textContent = result;

    if (result == "win") {
        humanScoreCount += 1;
        humanScore.textContent = "Your Score: " + humanScoreCount;
    }
    else if (result == "lose") {
        computerScoreCount += 1;
        computerScore.textContent = "Computer Score: " + computerScoreCount;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", buttonPressed);
});

