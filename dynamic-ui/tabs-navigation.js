// Setup tabs-navigation css
const styles = `
    .tabs-navigation button.active {
        text-decoration: underline;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Setup tabs-navigation js
(function () {
    const tabsNavs = document.querySelectorAll(".tabs-navigation");

    tabsNavs.forEach((tabsNav) => {
        const tabs = tabsNav.querySelectorAll(".tabs button");
        const content = tabsNav.querySelector(".content");

        async function loadContent(tab) {
            const response = await fetch(
                `http://127.0.0.1:8080/${tab.getAttribute("data-html")}`
            );
            const text = await response.text();

            return text;
        }

        function makeActive(tab) {
            tabs.forEach((tabOther) => {
                tabOther.classList.remove("active");
            });
            tab.classList.add("active");
        }

        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                loadContent(tab).then((value) => {
                    content.innerHTML = value;
                });
                makeActive(tab);
            });
            if (tab.getAttribute("default") != null) {
                tab.click();
            }
        });
    });
})();
