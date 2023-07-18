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

    return { checkIfEmpty, placeSign, resetBoard, displayBoard, hasEmpty, checkWin };

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
            let x = pickRandom(0, 3);
            let y = pickRandom(0, 3);

            while (!board.checkIfEmpty(x, y)) {
                x = pickRandom(0, 3);
                y = pickRandom(0, 3);
            }

            let thinkTime = pickRandom(500, 1500);

            setTimeout(function () {
                events.emit("playerMoved", [x, y]);
            }, thinkTime);
        }
    }

    return { getSign, getType, makeMove };
}

var game = (function () {
    let player1 = createPlayer("computer", "x");
    let player2 = createPlayer("computer", "o");

    let activePlayer = player1;

    events.on("playerMoved", playerMoved);

    start();

    console.log(board.hasEmpty());

    function playerMoved(x, y) {
        if (board.checkIfEmpty(x, y)) {
            board.placeSign(activePlayer.getSign(), x, y);
            board.displayBoard();

            if (board.checkWin("xxx", "ooo")) {
                console.log(activePlayer.getSign() + " Wins");
                return;
            }
            console.log(board.checkWin("xxx", "ooo"));

            activePlayer = activePlayer == player1 ? player2 : player1;
            activePlayer.makeMove();
        }
    }

    function start() {
        activePlayer.makeMove();
    }

    return { playerMoved };
})();
