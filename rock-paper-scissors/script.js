let buttons = document.querySelectorAll(".buttons > button");
let displayHuman = document.querySelector(".display-human");
let displayComputer = document.querySelector(".display-computer");
let announce = document.querySelector(".announce");
let humanScore = document.querySelector(".human-score");
let computerScore = document.querySelector(".computer-score");
let restartButton = document.querySelector(".restart-button")

let choices = ["rock", "paper", "scissors"];
let humanScoreCount = 0
let computerScoreCount = 0

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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

function updateScore(newHumanScore, newComputerScore) {
    humanScoreCount = newHumanScore;
    computerScoreCount = newComputerScore;
    humanScore.textContent = "Your Score: " + humanScoreCount;
    computerScore.textContent = "Computer Score: " + computerScoreCount;
}

function buttonPressed(event) {
    let humanChoice = this.id;
    let computerChoice = getComputerChoice();

    let result = playRound(humanChoice, computerChoice);

    displayHuman.textContent = capitalize(humanChoice);
    displayComputer.textContent = capitalize(computerChoice);

    announce.textContent = capitalize(result);

    if (result == "win") {
        updateScore(humanScoreCount + 1, computerScoreCount);
    }
    else if (result == "lose") {
        updateScore(humanScoreCount, computerScoreCount + 1);
    }
}

function resetGame() {
    updateScore(0, 0);
    displayHuman.textContent = "Rock";
    displayComputer.textContent = "Rock";
    announce.textContent = "Draw";
}

buttons.forEach((button) => {
    button.addEventListener("click", buttonPressed);
});

restartButton.addEventListener("click", resetGame);

