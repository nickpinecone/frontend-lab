import "./style.css";

import showHomePage from "./pages/home";
import showPiesPage from "./pages/pies";
import showContactPage from "./pages/contact";

const content = document.querySelector("#content");

function clearPage() {
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
        tabs.appendChild(homeButton);
        homeButton.addEventListener("click", () => {
            clearPage();
            showHomePage();
        });

        const foodButton = document.createElement("button");
        foodButton.textContent = "Pies";
        tabs.appendChild(foodButton);
        foodButton.addEventListener("click", () => {
            clearPage();
            showPiesPage();
        });

        const contactButton = document.createElement("button");
        contactButton.textContent = "Contact";
        tabs.appendChild(contactButton);
        contactButton.addEventListener("click", () => {
            clearPage();
            showContactPage();
        });

    }
    content.appendChild(tabs);
}

addTabs();
showHomePage();