let canvas = document.querySelector(".canvas");
let changeButton = document.querySelector(".change");
let clearButton = document.querySelector(".clear");
let modeButtons = document.querySelectorAll(".color-buttons > button");
let activeButton = document.querySelector(".color-buttons > button.active");

let mouseDown = false;
let paintMode = "normal";

createGrid(16);
bindEvents();

function paintCell(cell) {
    if (paintMode == "normal") {
        cell.style.backgroundColor = "rgba(0, 0, 0, 255)";
    }
    else if (paintMode == "rainbow") {
        cell.style.backgroundColor =
            `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 255)`;
    }
    else if (paintMode == "shading") {
        let index = cell.style.backgroundColor.indexOf("(");
        let numbers = cell.style.backgroundColor.slice(index + 1, cell.style.backgroundColor.length - 1);

        numbers = numbers.split(", ");

        let r = Number(numbers[0]);
        let g = Number(numbers[1]);
        let b = Number(numbers[2]);

        r = Math.max(r - 15, 0);
        g = Math.max(g - 15, 0);
        b = Math.max(b - 15, 0);

        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    else if (paintMode == "eraser") {
        cell.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
}

function clearCanvas() {
    canvas.childNodes.forEach((cell) => {
        cell.style.backgroundColor = "rgba(255, 255, 255, 0)";
    });
}

function createGrid(size) {
    canvas.replaceChildren();

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = "rgba(255, 255, 255, 0)";

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
        let size = 65;

        while (size > 64 || size <= 0) {
            size = prompt("Enter New Canvas Size (1 - 64): ");
        }

        createGrid(size);
    });

    clearButton.addEventListener("click", clearCanvas);

    modeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            paintMode = button.id;

            activeButton.classList.remove("active");
            button.classList.add("active");
            activeButton = button;
        });
    });
}



