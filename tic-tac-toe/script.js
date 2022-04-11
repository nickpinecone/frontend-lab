const Mode = {
    PVP: 0,
    PVE: 1
}

const Symbol = {
    X: "X",
    O: "O"
}

let display = (function() {
    let player1 = document.querySelector(".player1-score");
    let player2 = document.querySelector(".player2-score");
    let pvpButton = document.querySelector(".pvp > .mode");
    let pveButton = document.querySelector(".pve > .mode");
    let pveSymbols = document.querySelectorAll(".pve > .choice > button");
    let pvpSymbols = document.querySelectorAll(".pvp > .choice > button");

     function changeMode(type) {
        changeBottomBar(type);
        changeTopBar(type);
    }

    function changeBottomBar(type) {
        if(type == Mode.PVP) {
            player1.textContent = "Player1: 0";
            player2.textContent = "Player2: 0";
        }
        else {
            player1.textContent = "Player: 0";
            player2.textContent = "Computer: 0";
        }
    }

    function changeTopBar(type) {
        removeCurrentChosen();

        if(type == Mode.PVP) {
            pveButton.classList.remove("chosen");
            pvpButton.classList.add("chosen");
            disableChoosing();
        }
        else {
            pvpButton.classList.remove("chosen");
            pveButton.classList.add("chosen");

            pveSymbols.forEach((el) => {
                if(el.textContent == "O"){
                    el.disabled = false;
                    el.addEventListener("click", (event) => chooseSymbol(event));
                }
            });
        }

        const newSymbol = document.querySelector(
            "." + ((type == Mode.PVP) ? "pvp" : "pve") + " > .choice > button:first-child"
        );
        newSymbol.classList.add("chosen");
    }
    
    function highlightSymbol(symbol) {
        let currentMode = (state.getMode() == Mode.PVE) ? pveSymbols : pvpSymbols;

        currentMode.forEach((el) => {
            if(el.textContent == symbol){
                removeCurrentChosen();
                el.classList.add("chosen");
            }
        });
    }

    function chooseSymbol(event) {
        removeCurrentChosen();
        state.changeSymbol(Symbol.O);

        event.target.classList.add("chosen");
        event.target.disabled = true;
        event.target.removeEventListener("click", () => {});

    }

    function disableChoosing() {
        pveSymbols.forEach((el) => {
            if(el.textContent == "O"){
                el.disabled = true;
                el.removeEventListener("click", () => {});
            }
        });
    }

    function removeCurrentChosen() {
        const currentSymbol = document.querySelector(".choice > .chosen");
        currentSymbol.classList.remove("chosen");
    }

    function updateFirstScore(score) {
        let split = player1.textContent.split(" ");
        player1.textContent = split[0] + " " + score.toString();
    }

    function updateSecondScore(score) {
        let split = player2.textContent.split(" ");
        player2.textContent = split[0] + " " + score.toString();
    }

    function resetScore() {
        updateFirstScore(0);
        updateSecondScore(0);
    }

    return {changeMode, disableChoosing, resetScore, updateFirstScore, updateSecondScore, highlightSymbol};
})();

let board = (function() {
    let container = document.querySelector(".board");
    let cells = document.querySelectorAll(".cell");

    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    // Caculate the 2d array spot
    // get number attribute
    // let row = number // 3
    // let column = number % 3

    function hoverAnimation() {
        cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                cell.textContent = state.getSymbol();
                cell.style.color = "black";
                cell.removeEventListener("mouseleave", () => {});
                display.disableChoosing();

                state.nextTurn();
            });
        });
    }

    hoverAnimation();
})();

let state = (function() {
    let pvpButton = document.querySelector(".pvp > .mode");
    let pveButton = document.querySelector(".pve > .mode");

    let type = Mode.PVP;
    let symbol = Symbol.X;
    let score1 = 0;
    let score2 = 0;

    function bindEvents() {
        pvpButton.addEventListener("click", () => {
            if(type != Mode.PVP) {
                changeMode(Mode.PVP);
                symbol = Symbol.X;
                resetScore();
            }
        });
        pveButton.addEventListener("click", () => {
            if(type != Mode.PVE) {
                changeMode(Mode.PVE);
                symbol = Symbol.X;
                resetScore();
            }
        });
    }

    function increaseFirstScore() {
        score1 += 1;
        display.updateFirstScore(score1);
    }

    function increaseSecondScore() {
        score2 += 1;
        display.updateSecondScore(score2);
    }

    function resetScore() {
        score1 = 0;
        score2 = 0;
        display.resetScore();

    }

    function checkForWin() {
        return false;
    }

    function nextTurn() {
        if(checkForWin()) {

        }
        
        symbol = (symbol == Symbol.X) ? Symbol.O : Symbol.X;
        display.highlightSymbol(symbol);
    }

    function changeMode(newType) {
        type = newType;
        display.changeMode(newType);
    }

    function changeSymbol(newSymbol) {
        symbol = newSymbol;
    }

    function getMode() {
        return type;
    }

    function getSymbol() {
        return symbol;
    }

    bindEvents();

    return {getMode, changeMode, getSymbol, changeSymbol, nextTurn};
})();