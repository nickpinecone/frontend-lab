import {addTitle, addAttribution} from "./home";

import CherryPie from "../pies/baked-fresh-cherry-pie.jpg";
import ChocolatePie from "../pies/bevs-chocolate-pie.jpg";
import LemonPie from "../pies/grandmas-lemon-meringue-pie.jpg";
import LimePie from "../pies/key-lime-pie.jpg";
import CreamPie from "../pies/cream-pie-with-banana.jpg";
import UnrealPie from "../pies/out-of-this-world-pie.jpg";

const pies = [
    {name: "Baked Fresh Cherry Pie", path: CherryPie},
    {name: "Bevs Chocolate Pie", path: ChocolatePie},
    {name: "Grandmas Lemon Meringue Pie", path: LemonPie},
    {name: "Key Lime Pie", path: LimePie},
    {name: "Cream Pie With Banana", path: CreamPie},
    {name: "Out Of This World Pie", path: UnrealPie}
]

const content = document.querySelector("#content");

export default function showPiesPage() {
    addTitle(content, "Our Pies");

    const grid = document.createElement("div");
    grid.classList.add("grid");
    {
        for(let i in pies) {
            const card = document.createElement("div");
            card.classList.add("card");
            const image = document.createElement("img");
            image.src = pies[i].path;
            card.appendChild(image);

            const text = document.createElement("div");
            text.textContent = pies[i].name;
            card.appendChild(text);

            grid.appendChild(card);
        }
    }
    content.appendChild(grid);

    addAttribution(content, "https://www.allrecipes.com/recipes/367/desserts/pies/", "Pies photos taken from AllRecipes");
}