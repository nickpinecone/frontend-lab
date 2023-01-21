let canvas = document.querySelector(".canvas");

let mouseDown = false

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        canvas.appendChild(cell);
    }
}

canvas.addEventListener("mousedown", () => mouseDown = true)
window.addEventListener("mouseup", () => mouseDown = false)

canvas.childNodes.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = "black";
    });
    cell.addEventListener("mouseover", () => {
        if (mouseDown) {
            cell.style.backgroundColor = "black";
        }
    });
});


