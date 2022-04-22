import {createList, addTitle} from "./home";

const content = document.querySelector("#content");

export default function showContactPage() {
    addTitle(content, "Contact Us");

    const description = document.createElement("div");
    description.classList.add("description");

    createList(description, "Our Socials", ["Twitter: @atmarcels", "Instagram: @atmarcelspies", "Discord: @atmarcelspeak"]);
    createList(description, "Other Contacts", ["Number: 9876954321", "Addres: Boston, Cool Street 4"]);

    content.appendChild(description);
}