let buttons = document.querySelectorAll("button");
let output = document.querySelector("#output");
let playerOutput = document.querySelector("#player-score");
let computerOutput = document.querySelector("#computer-score");
let restartButton = document.querySelector("#restart-button");

let playerImage = document.querySelector("img.player");
let computerImage = document.querySelector("img.computer");

connectButtons();

let playerScore = 0;
let computerScore = 0; 

const numOfChoices = 3;
const choices = ["rock", "paper", "scissors"];

function changeImages(playerChoice, computerChoice) {
    computerImage.src = "imgs/" + computerChoice + ".jpg";
    playerImage.src = "imgs/" + playerChoice + ".jpg";
}

function updateUI() {
    playerOutput.textContent = "Your score: " + playerScore.toString();
    computerOutput.textContent = "Computer score: " + computerScore.toString();
}

function connectButtons() {
    buttons.forEach((button) => {
        if(button.id != "restart-button") {
            button.addEventListener("click", playRound);
        }
        else {
            button.addEventListener("click", restartGame);
        }
    });
}

function disconnectButtons() {
    buttons.forEach((button) => {
        if(button.id != "restart-button") {
            button.removeEventListener("click", playRound);
        }
    });
}

function endGame() {
    restartButton.style.visibility = "visible";
    disconnectButtons();

    if(computerScore >= playerScore) {
        output.textContent = "You lose. The computer is smarter!";
    }
    else {
        output.textContent = "You win. Not half bad.";
    }
}

function restartGame() {
    computerScore = 0;
    playerScore = 0;

    updateUI();
    changeImages("scissors", "scissors");
    connectButtons();

    restartButton.style.visibility = "hidden";
    output.textContent = "";
}

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * numOfChoices)
    return choices[randomChoice];
}

function playRound(event) {
    let playerSelection = event.target.id;
    let computerSelection = computerPlay();
    changeImages(playerSelection, computerSelection);

    if (playerSelection == computerSelection) {
        output.textContent = ("Tie! " + playerSelection + " vs " + computerSelection);
    }

    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore += 1;
        output.textContent = ("You win! " + playerSelection + " beats " + computerSelection);
    }

    else {
        computerScore += 1;
        output.textContent = ("You lose! " + computerSelection + " beats " + playerSelection);
    }

    updateUI();
    if(computerScore >= 5 || playerScore >= 5) {
        endGame();
    }
}