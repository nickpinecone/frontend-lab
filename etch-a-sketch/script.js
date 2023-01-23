let canvas = document.querySelector(".canvas");
let changeButton = document.querySelector(".change");
let clearButton = document.querySelector(".clear");
let modeButtons = document.querySelectorAll(".color-buttons > button");

let mouseDown = false;
let paintMode = "normal";

createGrid(16);
bindEvents();

function paintCell(cell) {
    if (paintMode == "normal") {

    }
    else if (paintMode == "rainbow") {

    }
    else if (paintMode == "shading") {

    }
    else if (paintMode == "eraser") {

    }
}

function clearCanvas() {
    canvas.childNodes.forEach((cell) => {
        cell.style.backgroundColor = "transparent";
    });
}

function createGrid(size) {
    canvas.replaceChildren();

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            cell.addEventListener("mousedown", (event) => paintCell(event.target));
            cell.addEventListener("mouseover", (event) => {
                if (mouseDown) {
                    paintCell(event.target)
                }
            });

            canvas.appendChild(cell);
        }
    }

    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function bindEvents() {
    canvas.addEventListener("mousedown", () => mouseDown = true);
    window.addEventListener("mouseup", () => mouseDown = false);

    changeButton.addEventListener("click", () => {
        let size = prompt("Enter New Canvas Size: ");
        createGrid(size);
    });

    clearButton.addEventListener("click", clearCanvas);

    modeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            paintMode = button.id;
        });
    });
}



