let canvas = document.querySelector(".canvas");
let changeButton = document.querySelector(".change");

let mouseDown = false;

createGrid(16);
bindEvents();

function createGrid(size) {
    canvas.replaceChildren();

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            cell.addEventListener("mousedown", () => {
                cell.style.backgroundColor = "black";
            });
            cell.addEventListener("mouseover", () => {
                if (mouseDown) {
                    cell.style.backgroundColor = "black";
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
        let size = prompt("Enter new canvas size: ");
        createGrid(size);
    });
}



