import CherryPie from "../pies/baked-fresh-cherry-pie.jpg";
import ChocolatePie from "../pies/bevs-chocolate-pie.jpg";
import LemonPie from "../pies/grandmas-lemon-meringue-pie.jpg";
import LimePie from "../pies/key-lime-pie.jpg";
import CreamPie from "../pies/cream-pie-with-banana.jpg";
import UnrealPie from "../pies/out-of-this-world-pie.jpg";

const piesNames = [
    CherryPie,
    ChocolatePie,
    LemonPie,
    LimePie,
    CreamPie,
    UnrealPie
]

const content = document.querySelector("#content");

export default function showPiesPage() {
    const title = document.createElement("div");
    title.classList.add("title");
    {
        const heading = document.createElement("h1");
        heading.textContent = "Our Delicious Pies";
        title.appendChild(heading);
    }
    content.appendChild(title);

    const grid = document.createElement("div");
    grid.classList.add("grid");
    {
        for(let pie of piesNames) {
            const card = document.createElement("div");
            card.classList.add("card");
            const image = document.createElement("img");
            image.src = pie;
            card.appendChild(image);
            grid.appendChild(card);
        }
    }
    content.appendChild(grid);


    const attribution = document.createElement("div");
    attribution.classList.add("attribution");
    {
        const a = document.createElement("a");
        a.href = "https://www.allrecipes.com/recipes/367/desserts/pies/"
        a.title = "pies photos";
        a.textContent = "Pies photos taken from AllRecipes";
        attribution.appendChild(a);
    }
    content.appendChild(attribution);
}