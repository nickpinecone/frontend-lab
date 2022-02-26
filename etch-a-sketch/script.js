const MaxGridSize = 64;

const PaintModes = {
    NORMAL: 0,
    RAINBOW: 1,
    SHADING: 2
}
let paintMode = PaintModes.NORMAL;

let mouseDown = false;
const canvas = document.querySelector(".canvas");
canvas.addEventListener("mousedown", () => mouseDown = true);
window.addEventListener("mouseup", () => mouseDown = false);

connectButtons();
createGrid(16);

function connectButtons() {
    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", clearButtonClicked);

    const newButton = document.querySelector(".new");
    newButton.addEventListener("click", newButtonClicked);

    const normalModeButton = document.querySelector(".normal");
    normalModeButton.addEventListener("click", () => paintMode = PaintModes.NORMAL);

    const rainbowModeButton = document.querySelector(".rainbow");
    rainbowModeButton.addEventListener("click", () => paintMode = PaintModes.RAINBOW);

    const shadingModeButton = document.querySelector(".shading");
    shadingModeButton.addEventListener("click", () => paintMode = PaintModes.SHADING);
}

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let pixel = document.createElement("div");
            pixel.style.border = "1px solid gray";
            pixel.style.backgroundColor = "white";
    
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
    let gridSize = MaxGridSize+1;
    while(gridSize > MaxGridSize) {
        gridSize = prompt("New grid size (max - 64px): ");
    }

    clearGrid();
    createGrid(gridSize);
}

function mouseOverPixel(event) {
    if(mouseDown) {
        paintPixel(event.target);
    }
}

function pixelClicked(event) {
    paintPixel(event.target);
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}

function shadePixel(pixel, shade) {
    shade = shade.slice(4, shade.length-1);
    shade += ",";

    let rgb = [];
    let currentNum = "";
    for(let i = 0; i < shade.length; i++){
        char = shade[i];

        if(char == ' ') {
            continue;
        }
        else if(char != ',') {
            currentNum += char;
        }
        else {
            rgb.push(Number(currentNum));
            currentNum = "";
        }
    }

    let shadeScale = 20;
    pixel.style.backgroundColor = `rgb(${rgb[0]-shadeScale}, ${rgb[1]-shadeScale}, ${rgb[2]-shadeScale})`;
}

function paintPixel(pixel) {
    if(paintMode == PaintModes.NORMAL) {
        pixel.style.backgroundColor = "black";
    }
    else if(paintMode == PaintModes.RAINBOW) {
        pixel.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
    else if(paintMode == PaintModes.SHADING) {
        let style = window.getComputedStyle(pixel);
        let shade = style.getPropertyValue("background-color");
        shadePixel(pixel, shade);
    }
}