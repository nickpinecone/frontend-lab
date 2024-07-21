import FreshCherry from "../images/baked-fresh-cherry-pie.jpg";
import BevsChocolate from "../images/bevs-chocolate-pie.jpg";
import CreamBanana from "../images/cream-pie-with-banana.jpg";
import LemonMeringue from "../images/grandmas-lemon-meringue-pie.jpg";
import KeyLime from "../images/key-lime-pie.jpg";
import RaspberryCream from "../images/raspberry-cream-pie.png";

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