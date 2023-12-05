import dropdown from "./drop-down.js";

const dropDown = dropdown(".drop-down.second");

dropDown.subscribe((item) => {
    console.log(item.textContent);
});
