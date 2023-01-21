let canvas = document.querySelector(".canvas");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div")
        cell.classList.add("cell")

        canvas.appendChild(cell)
    }
}
