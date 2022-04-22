import {addTitle, addAttribution, createList} from "../utils";

import Logo from "../restaurant.png";

const content = document.querySelector("#content");

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
