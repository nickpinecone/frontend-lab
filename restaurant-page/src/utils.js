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