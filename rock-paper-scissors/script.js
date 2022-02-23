let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.id));
});

let output = document.querySelector("#output");
let playerOutput = document.querySelector("#player-score");
let computerOutput = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0; 

const numOfChoices = 3;
const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * numOfChoices)
    return choices[randomChoice];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();

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
        playerOutput.textContent = "Your score: " + playerScore.toString();
    }

    else {
        computerScore += 1;
        output.textContent = ("You lose! " + computerSelection + " beats " + playerSelection);
        computerOutput.textContent = "Computer score: " + computerScore.toString();
    }
}