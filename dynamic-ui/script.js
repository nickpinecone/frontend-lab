import dropdown from "./drop-down.js";

const dropDown = dropdown(".drop-down");

function getVal(value) {
    console.log(value);
}

dropDown.subscribe(getVal);
