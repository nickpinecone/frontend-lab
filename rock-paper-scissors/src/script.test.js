const { playRound, getComputerChoice } = require("./utils.js");

test("random computer choice", () => {
    expect(["rock", "paper", "scissors"]).toContain(getComputerChoice());
});

test("player can win", () => {
    expect(playRound("paper", "rock")).toBe("win");
});
