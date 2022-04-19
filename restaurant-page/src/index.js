import "./style.css";
import Logo from "./restaurant.png";

const content = document.querySelector("#content");

const title = document.createElement("div");
title.classList.add("title");
{
    const heading = document.createElement("h1");
    heading.textContent = "At Marcel's";
    title.appendChild(heading);
}
content.appendChild(title);

const description = document.createElement("div");
description.classList.add("description");
{
    const logo = document.createElement("img");
    logo.src = Logo;
    description.appendChild(logo);

    const heading = document.createElement("h3");
    heading.textContent = "Best Pies In The World";
    description.appendChild(heading);

    const container = document.createElement("div");
    {
        const heading = document.createElement("h4");
        heading.textContent = "We Care About Our Customers";
        container.appendChild(heading);

        const list = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = "Best Quality";
        list.appendChild(li);
        
        li = document.createElement("li");
        li.textContent = "Fair Prices";
        list.appendChild(li);

        li = document.createElement("li");
        li.textContent = "Huge Selection";
        list.appendChild(li);

        li = document.createElement("li");
        li.textContent = "Blazingly Fast Delivery";
        list.appendChild(li);
        

        container.appendChild(list);
    }
    description.appendChild(container);
}
content.appendChild(description);

const attribution = document.createElement("div");
attribution.classList.add("attribution");
{
    const a = document.createElement("a");
    a.href = "https://www.flaticon.com/free-icons/restaurant";
    a.title = "restaurant icons";
    a.textContent = "Restaurant icons created by Freepik";
    attribution.appendChild(a);
}
content.appendChild(attribution);