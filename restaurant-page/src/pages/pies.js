import CherryPie from "../pies/baked-fresh-cherry-pie.jpg";

const piesNames = [
    "baked-fresh-cherry-pie",
    "bevs-chocolate-pie",
    "cream-pie-with-banana",
    "grandmas-lemon-meringue-pie",
    "key-lime-pie",
    "out-of-this-world-pie"
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
            image.src = CherryPie;
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