const maxGridSize = 64;

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearButtonClicked);

const newButton = document.querySelector(".new");
newButton.addEventListener("click", newButtonClicked);

let mouseDown = false;
const canvas = document.querySelector(".canvas");
canvas.addEventListener("mousedown", () => mouseDown = true);
canvas.addEventListener("mouseup", () => mouseDown = false);

createGrid(16);

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let pixel = document.createElement("div");
            pixel.style.border = "1px solid gray";
    
            pixel.addEventListener("mouseover", mouseOverPixel);
            pixel.addEventListener("mousedown", pixelClicked);
    
            canvas.appendChild(pixel);
        }
    }

    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function clearGrid() {
    while(canvas.lastChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

function clearButtonClicked(event) {
    let pixels = Array.from(canvas.children);
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    });
}

function newButtonClicked(event) {
    let gridSize = maxGridSize+1;
    while(gridSize > maxGridSize) {
        gridSize = prompt("New grid size (max - 64px): ");
    }

    clearGrid();
    createGrid(gridSize);
}

function mouseOverPixel(event) {
    if(mouseDown) {
        event.target.style.backgroundColor = "black";
    }
}

function pixelClicked(event) {
    event.target.style.backgroundColor = "black";
}