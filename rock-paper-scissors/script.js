const numOfChoices = 3;
const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * numOfChoices)
    return choices[randomChoice];
}

function playerPlay() {
    let input = "";
    while (!choices.includes(input)) {
        input = prompt("Enter your choice (rock, paper, scissors): ");
        input = input.toLowerCase();
    }
    return input;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie! " + playerSelection + " vs " + computerSelection;
    }

    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }

    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = playerPlay();
        let computerChoice = computerPlay();

        console.log("Your choice: " + playerChoice);
        console.log("Computer choice: " + computerChoice);

        console.log(playRound(playerChoice, computerChoice));
    }
}

playGame();