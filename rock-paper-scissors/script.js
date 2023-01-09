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

game()

