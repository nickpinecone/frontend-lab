import showHomePage from "./home";

const content = document.querySelector("#content");

function addBottomBar() {
    const tabs = document.createElement("div");
    tabs.classList.add("tabs");
    {
        const homeButton = document.createElement("button");
        homeButton.textContent = "Home";
        homeButton.addEventListener("click", showHomePage);
        tabs.appendChild(homeButton);

        const foodButton = document.createElement("button");
        foodButton.textContent = "Pies";
        tabs.appendChild(foodButton);

        const contactButton = document.createElement("button");
        contactButton.textContent = "Contact";
        tabs.appendChild(contactButton);

    }
    content.appendChild(tabs);

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
}

showHomePage();
addBottomBar();