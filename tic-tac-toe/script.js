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
    let resultButton = document.querySelector("#result");

     function changeMode(type) {
        changeBottomBar(type);
        changeTopBar(type);
    }

    function changeBottomBar(type) {
        if(type == Mode.PVP) {
            player1.textContent = "Player-X: 0";
            player2.textContent = "Player-O: 0";
        }
        else {
            player1.textContent = "Player-X: 0";
            player2.textContent = "Computer-O: 0";
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
    
    function showDrawMessage() {
        resultButton.hidden = false;
        resultButton.textContent = "Draw";
        resultButton.addEventListener("click", resultButtonClicked);
    }

    function resultButtonClicked() {
        board.clearBoard();
        hideResultMessage();
        (state.getSymbol() == Symbol.X) ? state.changeSymbol(Symbol.O) : state.changeSymbol(Symbol.X);
    }

    function hideResultMessage() {
        resultButton.hidden = true;
        resultButton.textContent = "";
        resultButton.removeEventListener("click", resultButtonClicked);
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

    return {
        changeMode, disableChoosing, resetScore, 
        updateFirstScore, updateSecondScore, highlightSymbol,
        showDrawMessage, hideResultMessage, 
    };
})();

let board = (function() {
    let container = document.querySelector(".board");
    let cells = document.querySelectorAll(".cell");

    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]

    function bindEvents() {
        cells.forEach((cell) => {
            cell.addEventListener("mouseenter", () => {
                if(!(cell.classList.contains("occupied"))) {
                    cell.textContent = state.getSymbol();
                    cell.style.color = "gray";
                }
            });

            cell.addEventListener("mouseleave", () => {
                if(!(cell.classList.contains("occupied"))) {
                    cell.textContent = "";
                }
            });

            cell.addEventListener("click", () => {
                if(!(cell.classList.contains("occupied"))) {
                    let number = Number(cell.getAttribute("number"));
                    let row = Math.floor(number / 3);
                    let column = number % 3;
                    board[row][column] = state.getSymbol();
    
                    cell.style.color = "black";
                    cell.textContent = state.getSymbol();
                    cell.classList.add("occupied");
                    display.disableChoosing();
                    state.nextTurn();
                }
            });
        });
    }

    function checkForDraw() {
        let isDraw = true;

        board.forEach((row) => {
            row.forEach((column) => {
                if(column == "") {
                    isDraw = false;
                }
            });
        });

        return isDraw;
    }

    function checkForWin() {
        for(let i = 0; i < 3; i++) {
            if(board[i][0] != "" && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
                return true;
            }
        }
        for(let i = 0; i < 3; i++) {
            if(board[0][i] != "" && board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
                return true;
            }
        }
        if(board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            return true;
        }
        else if(board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            return true;
        }

        return false;
    }

    function setAllOccupied() {
        cells.forEach((cell) => {
            cell.classList.add("occupied");
        });
    }

    function clearBoard() {
        cells.forEach((cell) => {
            cell.textContent = "";
            cell.classList.remove("occupied");
        });
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
    }

    bindEvents();

    return {clearBoard, checkForDraw, checkForWin, setAllOccupied};
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
            }
        });
        pveButton.addEventListener("click", () => {
            if(type != Mode.PVE) {
                changeMode(Mode.PVE);
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

    function nextTurn() {
        if(board.checkForWin()) {
            if(symbol == Symbol.X) {
                increaseFirstScore();
            }
            else {
                increaseSecondScore();
            }
            display.showDrawMessage();
            board.setAllOccupied();
            return;
        }

        else if(board.checkForDraw()) {
            display.showDrawMessage();
            return;
        }

        changeSymbol((symbol == Symbol.X) ? Symbol.O : Symbol.X);
    }

    function changeMode(newType) {
        type = newType;
        symbol = Symbol.X;
        resetScore();
        board.clearBoard();
        display.changeMode(newType);
        display.hideResultMessage();
    }

    function changeSymbol(newSymbol) {
        symbol = newSymbol;
        display.highlightSymbol(symbol);
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