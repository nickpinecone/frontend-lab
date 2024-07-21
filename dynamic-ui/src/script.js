import dropdown from "./scripts/drop-down.js";

const dropDown = dropdown(".drop-down");
const output = document.querySelector(".output");

dropDown.subscribe((item) => {
    output.textContent = item.textContent;
});
