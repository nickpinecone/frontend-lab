const Mode = {
    PVP: 0,
    PVE: 1
}

let state = {
    player1: document.querySelector(".player1-score"),
    player2: document.querySelector(".player2-score"),
    pvpButton: document.querySelector(".pvp > .mode"),
    pveButton: document.querySelector(".pve > .mode"),
    pveSymbols: document.querySelectorAll(".pve > .choice > button"),

    type: Mode.PVP,

    changeMode: function(type) {
        this.changeBottomBar(type);
        this.changeTopBar(type);
    },
    changeBottomBar(type) {
        if(type == Mode.PVP) {
            this.player1.textContent = "Player1: 0";
            this.player2.textContent = "Player2: 0";
        }
        else {
            this.player1.textContent = "Player: 0";
            this.player2.textContent = "Computer: 0";
        }
    },
    changeTopBar(type) {
        const currentSymbol = document.querySelector(".choice > .chosen");
        currentSymbol.classList.remove("chosen");

        if(type == Mode.PVP) {
            this.pveButton.classList.remove("chosen");
            this.pvpButton.classList.add("chosen");

            const newSymbol = document.querySelector(".pvp > .choice > button:first-child");
            newSymbol.classList.add("chosen");
        }
        else {
            this.pvpButton.classList.remove("chosen");
            this.pveButton.classList.add("chosen");

            this.pveSymbols.forEach((el) => {
                el.disabled = false;
                el.addEventListener("click", (event) => this.chooseSymbol(event));
            });
        }
    },
    chooseSymbol(event) {
        event.target.classList.add("chosen");
        this.pveSymbols.forEach((el) => {
            el.disabled = true;
            el.removeEventListener("click", () => {});
        });
    },
    getMode: function() {
        return this.type;
    }
}

state.changeMode(Mode.PVE);