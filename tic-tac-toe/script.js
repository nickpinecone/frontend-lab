var board = (function () {
    let _board = [];
    resetBoard();

    function checkIfEmpty(x, y) {
        return _board[x][y] == "";
    }

    function placeSign(sign, x, y) {
        if (checkIfEmpty(x, y)) {
            _board[x][y] = sign;
        }
    }

    function getSign(x, y) {
        return _board[x][y];
    }

    function checkWin(cond1, cond2) {
        let isWin = false;

        for (let i = 0; i < 3; i++) {
            if ([cond1, cond2].includes((_board[i][0] + _board[i][1] + _board[i][2]))) {
                isWin = true;
                break;
            }
            else if ([cond1, cond2].includes((_board[0][i] + _board[1][i] + _board[2][i]))) {
                isWin = true;
                break;
            }
        }
        if ([cond1, cond2].includes((_board[0][0] + _board[1][1] + _board[2][2]))) {
            isWin = true;
        }
        else if ([cond1, cond2].includes((_board[0][2] + _board[1][1] + _board[2][0]))) {
            isWin = true;
        }

        return isWin;
    }

    function hasEmpty() {
        let isEmpty = false;

        for (let i = 0; i < 3; i++) {
            for (let k = 0; k < 3; k++) {
                if (_board[i][k] == "") {
                    isEmpty = true;
                    break;
                }
            }
        }

        return isEmpty;
    }

    function resetBoard() {
        _board = [["", "", ""], ["", "", ""], ["", "", ""]];
    }

    function displayBoard() {
        for (let i = 0; i < 3; i++) {
            console.log(_board[i][0], _board[i][1], _board[i][2]);
        }
    }

    return { checkIfEmpty, placeSign, resetBoard, displayBoard, hasEmpty, checkWin, getSign };

})();

var createPlayer = function (type, sign) {
    let _type = type;
    let _sign = sign;

    function getSign() {
        return _sign;
    }

    function getType() {
        return _type;
    }

    function pickRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function makeMove() {
        if (_type == "computer" && board.hasEmpty()) {
            events.emit("computerTurn");

            let x = pickRandom(0, 3);
            let y = pickRandom(0, 3);

            while (!board.checkIfEmpty(x, y)) {
                x = pickRandom(0, 3);
                y = pickRandom(0, 3);
            }

            let thinkTime = pickRandom(500, 1500);

            setTimeout(function () {
                events.emit("playerMoved", [x, y]);
                events.emit("computerFinished");
            }, thinkTime);
        }
    }

    return { getSign, getType, makeMove };
}

var dom = (function () {
    let boardCells = document.querySelectorAll(".board>button");
    let showTurnPlayer1 = document.querySelector(".show-turn>.player1");
    let showTurnPlayer2 = document.querySelector(".show-turn>.player2");

    bindEvents();

    events.on("computerTurn", toggleBoard);
    events.on("computerFinished", toggleBoard);

    function bindEvents() {
        boardCells.forEach(function (el) {
            el.addEventListener("click", function () {
                events.emit("playerMoved", [el.getAttribute("data-x"), el.getAttribute("data-y")]);
            });
        });

    }

    function setSigns(sign1, sign2) {
        showTurnPlayer1.textContent = sign1 + " turn";
        showTurnPlayer2.textContent = sign2 + " turn";
    }

    function switchActivePlayer() {
        if (showTurnPlayer1.classList.contains("active")) {
            showTurnPlayer1.classList.remove("active");
            showTurnPlayer2.classList.add("active");
        }
        else {
            showTurnPlayer2.classList.remove("active");
            showTurnPlayer1.classList.add("active");
        }
    }

    function toggleBoard() {
        boardCells.forEach(function (el) {
            el.disabled = !el.disabled;
        });
    }

    function render() {
        boardCells.forEach(function (el) {
            let x = el.getAttribute("data-x");
            let y = el.getAttribute("data-y");

            el.textContent = board.getSign(x, y);
        });
    }

    return { render, toggleBoard, setSigns, switchActivePlayer };
})();

var game = (function () {
    let player1 = createPlayer("computer", "x");
    let player2 = createPlayer("computer", "o");

    let activePlayer = player1;

    events.on("playerMoved", playerMoved);

    start();

    function playerMoved(x, y) {
        if (board.checkIfEmpty(x, y)) {
            board.placeSign(activePlayer.getSign(), x, y);
            board.displayBoard();
            dom.render();

            if (board.checkWin(player1.getSign().repeat(3), player2.getSign().repeat(3)) || !board.hasEmpty()) {
                console.log(activePlayer.getSign() + " wins");
                dom.toggleBoard();
                return;
            }

            dom.switchActivePlayer();

            activePlayer = activePlayer == player1 ? player2 : player1;
            activePlayer.makeMove();
        }
    }

    function start() {
        dom.setSigns(player1.getSign(), player2.getSign());
        activePlayer.makeMove();
    }

    return { playerMoved };
})();
