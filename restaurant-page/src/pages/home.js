import Logo from "../restaurant.png";

const content = document.querySelector("#content");

export function createList(description, title, data) {
    const container = document.createElement("div");

    const heading = document.createElement("h4");
    heading.textContent = title;
    container.appendChild(heading);

    const items = document.createElement("div");
    const list = document.createElement("ul");

    for(let i in data) {
        let li = document.createElement("li");
        li.textContent = data[i];
        list.appendChild(li);
    }
    items.appendChild(list);
    container.appendChild(items);

    description.appendChild(container);
}

export function addTitle(content, name) {
    const title = document.createElement("div");
    title.classList.add("title");
    {
        const heading = document.createElement("h1");
        heading.textContent = name;
        title.appendChild(heading);
    }
    content.appendChild(title);
}

export function addAttribution(content, url, text) {
    const attribution = document.createElement("div");
    attribution.classList.add("attribution");
    {
        const a = document.createElement("a");
        a.href = url;
        a.textContent = text;
        attribution.appendChild(a);
    }
    content.appendChild(attribution);
}

export default function showHomePage() {
    addTitle(content, "At Marcel's");

    const description = document.createElement("div");
    description.classList.add("description");
    {
        const logo = document.createElement("img");
        logo.src = Logo;
        description.appendChild(logo);
    
        const heading = document.createElement("h3");
        heading.textContent = "Best Pies In The World";
        description.appendChild(heading);

        createList(description, "We Care About Our Customers", ["Best Quality", "Fair Prices", "Huge Selection", "Blazingly Fast Delivery"]);
    }
    content.appendChild(description);

    addAttribution(content, "https://www.flaticon.com/free-icons/restaurant", "Restaurant icons created by Freepik");
}
