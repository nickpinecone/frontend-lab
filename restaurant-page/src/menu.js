import FreshCherry from "./imgs/baked-fresh-cherry-pie.jpg";
import BevsChocolate from "./imgs/bevs-chocolate-pie.jpg";
import CreamBanana from "./imgs/cream-pie-with-banana.jpg";
import LemonMeringue from "./imgs/grandmas-lemon-meringue-pie.jpg";
import KeyLime from "./imgs/key-lime-pie.jpg";
import RaspberryCream from "./imgs/raspberry-cream-pie.png";

export default function createMenu() {

    let panel = document.createElement("div");
    panel.classList.add("panel");

    panel.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="items-list">
            <div class="item"><img src="${FreshCherry}" alt=""><span class="desc">${"Baked Fresh Cherry"}</span></div>
            <div class="item"><img src="${BevsChocolate}" alt=""><span class="desc">${"Bev's Chocolate"}</span></div>
            <div class="item"><img src="${CreamBanana}" alt=""><span class="desc">${"Cream With Banana"}</span></div>
            <div class="item"><img src="${LemonMeringue}" alt=""><span class="desc">${"Grandma's Lemon Meringue"}</span></div>
            <div class="item"><img src="${KeyLime}" alt=""><span class="desc">${"Key Lime"}</span></div>
            <div class="item"><img src="${RaspberryCream}" alt=""><span class="desc">${"Raspberry Cream"}</span></div>
        </div>
        `
    );

    return panel;
};