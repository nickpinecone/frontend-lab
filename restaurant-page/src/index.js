import "./style.css";

import showHomePage from "./pages/home";
import showPiesPage from "./pages/pies";
import showContactPage from "./pages/contact";

const content = document.querySelector("#content");
let tabInfo = [
    {name: "Home", show: showHomePage},
    {name: "Pies", show: showPiesPage},
    {name: "Contact", show: showContactPage}
]
let tabButtons = [];
let currentPage;

function clearPage() {
    currentPage.classList.remove("chosen");

    Array.from(content.children).forEach((elem) => {
        if(elem.classList.contains("tabs")) {
            return;
        }
        else {
            content.removeChild(elem);
        }
    });
}

(function addTabs() {
    const tabs = document.createElement("div");
    tabs.classList.add("tabs");

    for(let i = 0; i < 3; i++) {
        const tab = document.createElement("button");
        tab.textContent = tabInfo[i].name;
        tabs.appendChild(tab);
        tabButtons.push(tab);

        if(i == 0) {
            tab.classList.add("chosen");
            currentPage = tabButtons[i];
        }

        tab.addEventListener("click", () => {
            if(currentPage != tab) {
                clearPage();
                tabInfo[i].show();

                tab.classList.add("chosen");
                currentPage = tab;
            }
        });
    }

    content.appendChild(tabs);
})();

showHomePage();