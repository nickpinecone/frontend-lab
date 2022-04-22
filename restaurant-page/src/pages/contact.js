import {createList} from "./home";

const content = document.querySelector("#content");

export default function showContactPage() {
    const title = document.createElement("div");
    title.classList.add("title");
    {
        const heading = document.createElement("h1");
        heading.textContent = "Contact Us";
        title.appendChild(heading);
    }
    content.appendChild(title);

    const description = document.createElement("div");
    description.classList.add("description");

    createList(description, "Our Socials", ["Twitter: @atmarcels", "Instagram: @atmarcelspies", "Discord: @atmarcelspeak"]);
    createList(description, "Other Contacts", ["Number: 9876954321", "Addres: Boston, Cool Street 4"]);

    content.appendChild(description);
}