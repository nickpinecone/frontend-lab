let choices = ["rock", "paper", "scissors"];

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getEmoji(word) {
    if (word == "rock") {
        return "✊";
    }
    else if (word == "paper") {
        return "✋";
    }
    else {
        return "🖖";
    }
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

module.exports = {
    playRound,
    getComputerChoice,
    getEmoji,
    capitalize,
}
