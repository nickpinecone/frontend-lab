let buttons = document.querySelectorAll("button")
let displayHuman = document.querySelector(".display-human")
let displayComputer = document.querySelector(".display-computer")
let announce = document.querySelector(".announce")

let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)

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
        return "win"
    }
    else {
        return "lose"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = "";

        while (!choices.find((value, index, obj) => value == playerSelection)) {
            playerSelection = prompt("Choose your weapon (rock, paper, scissors): ");
            continue
        }

        let computerChoice = getComputerChoice();

        console.log(playRound(playerSelection, computerChoice));
    }
}

function buttonPressed(event) {
    displayHuman.textContent = this.id;
    displayComputer.textContent = getComputerChoice();

    let result = playRound(displayHuman.textContent, displayComputer.textContent);

    announce.textContent = result;
}

buttons.forEach((button) => {
    button.addEventListener("click", buttonPressed);
});

