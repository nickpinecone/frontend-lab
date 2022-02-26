const canvas = document.querySelector(".canvas");

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        let pixel = document.createElement("div");
        pixel.style.border = "1px solid gray";
        canvas.appendChild(pixel);
    }
}