const Mode = {
    PVP: 0,
    PVE: 1
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
                el.disabled = false;
                el.addEventListener("click", (event) => chooseSymbol(event));
            });
        }

        const newSymbol = document.querySelector(
            "." + ((type == Mode.PVP) ? "pvp" : "pve") + " > .choice > button:first-child"
        );
        newSymbol.classList.add("chosen");
    }
    
    function chooseSymbol(event) {
        removeCurrentChosen();

        event.target.classList.add("chosen");
        pveSymbols.forEach((el) => {
            el.disabled = true;
            el.removeEventListener("click", () => {});
        });
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

    function changeMode(changeType) {
        type = changeType;
        display.changeMode(changeType);
    }

    function getMode() {
        return type;
    }

    return {getMode, changeMode, bindEvents};
})();
state.bindEvents();