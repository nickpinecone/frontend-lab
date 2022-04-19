import showHomePage from "./home";

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
        homeButton.addEventListener("click", () => {
            clearPage();
            showHomePage();
        });
        tabs.appendChild(homeButton);

        const foodButton = document.createElement("button");
        foodButton.textContent = "Pies";
        tabs.appendChild(foodButton);

        const contactButton = document.createElement("button");
        contactButton.textContent = "Contact";
        tabs.appendChild(contactButton);

    }
    content.appendChild(tabs);
}

addTabs();
showHomePage();