import dropdown from "./drop-down.js";

const dropDown = dropdown(".drop-down");

dropDown.subscribe((item) => {
    console.log(item);
});
