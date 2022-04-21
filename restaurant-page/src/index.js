import "./style.css";

import showHomePage from "./pages/home";
import showPiesPage from "./pages/pies";
import showContactPage from "./pages/contact";

const content = document.querySelector("#content");
let chosen = null;

function clearPage() {
    chosen.classList.remove("chosen");

    Array.from(content.children).forEach((elem) => {
        if(elem.classList.contains("tabs")) {
            return;
        }
        else {
            content.removeChild(elem);
        }
    });
}

function addTabs() {
    const tabs = document.createElement("div");
    tabs.classList.add("tabs");
    {
        const homeButton = document.createElement("button");
        homeButton.textContent = "Home";

        homeButton.classList.add("chosen");
        chosen = homeButton;

        tabs.appendChild(homeButton);
        homeButton.addEventListener("click", () => {
            clearPage();
            showHomePage();
            
            homeButton.classList.add("chosen");
            chosen = homeButton;
        });

        const foodButton = document.createElement("button");
        foodButton.textContent = "Pies";
        tabs.appendChild(foodButton);
        foodButton.addEventListener("click", () => {
            clearPage();
            showPiesPage();

            foodButton.classList.add("chosen");
            chosen = foodButton;
        });

        const contactButton = document.createElement("button");
        contactButton.textContent = "Contact";
        tabs.appendChild(contactButton);
        contactButton.addEventListener("click", () => {
            clearPage();
            showContactPage();

            contactButton.classList.add("chosen");
            chosen = contactButton;
        });

    }
    content.appendChild(tabs);
}

addTabs();
showHomePage();