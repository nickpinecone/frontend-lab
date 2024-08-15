const type = { rock: "rock", paper: "paper", scissors: "scissors" };
const result = { lose: "lose", win: "win", draw: "draw" };

function getRandomChoice() {
    var choices = [type.rock, type.paper, type.scissors];
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getAltText(current) {
    if (current == type.paper) {
        return "Paper hand symbol";
    } else if (current == type.rock) {
        return "Rock hand symbol";
    } else {
        return "Scissors hand symbol";
    }
}

function isPlayerWin(player, computer) {
    if (
        (player == type.rock && computer == type.scissors) ||
        (player == type.scissors && computer == type.paper) ||
        (player == type.paper && computer == type.rock)
    ) {
        return result.win;
    } else if (player == computer) {
        return result.draw;
    } else {
        return result.lose;
    }
}

export default { type, result, getRandomChoice, getAltText, isPlayerWin };
