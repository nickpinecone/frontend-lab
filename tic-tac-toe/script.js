const Mode = {
    PVP: 0,
    PVE: 1
}

const Symbol = {
    X: 0,
    O: 1
}

let display = (function() {
    let player1 = document.querySelector(".player1-score");
    let player2 = document.querySelector(".player2-score");
    let pvpButton = document.querySelector(".pvp > .mode");
    let pveButton = document.querySelector(".pve > .mode");
    let pveSymbols = document.querySelectorAll(".pve > .choice > button");

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
    
    function chooseSymbol(event) {
        removeCurrentChosen();
        state.changeSymbol(Symbol.O);

        event.target.classList.add("chosen");
        event.target.disabled = true;
        event.target.removeEventListener("click", () => {});

    }

    function removeCurrentChosen() {
        const currentSymbol = document.querySelector(".choice > .chosen");
        currentSymbol.classList.remove("chosen");
    }

    return {changeMode};
})();

let state = (function() {
    let pvpButton = document.querySelector(".pvp > .mode");
    let pveButton = document.querySelector(".pve > .mode");

    let type = Mode.PVP;
    let symbol = Symbol.X;

    function bindEvents() {
        pvpButton.addEventListener("click", () => {
            if(type != Mode.PVP) {
                changeMode(Mode.PVP);
                symbol = Symbol.X;
            }
        });
        pveButton.addEventListener("click", () => {
            if(type != Mode.PVE) {
                changeMode(Mode.PVE);
                symbol = Symbol.X;
            }
        });
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

    return {getMode, changeMode, getSymbol, changeSymbol, bindEvents};
})();