// import dropdown from "./drop-down.js";

// const dropDown = dropdown(".drop-down");

// dropDown.subscribe((item) => {
//     console.log(item.textContent);
// });

(function () {
    const tabsNavs = document.querySelectorAll(".tabs-navigation");

    tabsNavs.forEach((tabsNav) => {
        const tabs = tabsNav.querySelectorAll(".tabs button");
        const content = tabsNav.querySelector(".content");

        async function loadContent(tab) {
            const response = await fetch(
                `http://127.0.0.1:8080/${tab.getAttribute("data-id")}`
            );
            const text = await response.text();

            return text;
        }

        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                loadContent(tab).then((value) => {
                    content.innerHTML = value;
                });
            });
        });
    });
})();
