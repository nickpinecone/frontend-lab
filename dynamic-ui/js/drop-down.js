// Setup drop-down css
const styles = `
    .drop-down {
        position: relative;
    }

    .drop-down .items {
        margin: 0;
        padding: 0;
        list-style-type: none;
        left: 0;
        top: 100%;
        border: 1px solid gray;
        display: none;
        position: absolute;
        width: max-content;
    }

    .drop-down .items .item {
        background-color: whitesmoke;
        padding: 2px;
    }

    .drop-down .items .item:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    .drop-down .items .item:active {
        filter: brightness(0.7);
    }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Setup drop-downs js
(function () {
    const dropDowns = document.querySelectorAll(".drop-down");

    dropDowns.forEach((dropDown) => {
        const button = dropDown.querySelector(".trigger");
        const list = dropDown.querySelector(".items");
        const children = Array.from(list.children);
        let active = false;

        function changeActive() {
            if (active) {
                list.classList.remove("active");
                list.style.display = "none";
            } else {
                list.classList.add("active");
                list.style.display = "initial";
            }

            active = !active;
        }

        children.forEach((child) => {
            child.addEventListener("click", () => {
                changeActive();
            });
        });

        button.addEventListener("click", () => {
            changeActive();
        });

        window.addEventListener("click", (event) => {
            if (active && !event.target.matches(".drop-down, .drop-down *")) {
                changeActive();
            }
        });
    });
})();

// Setup drop-down js
export default function (query) {
    const dropDown = document.querySelector(query);
    if (!dropDown.classList.contains("drop-down")) {
        return null;
    }

    let onselect = function (item) {};

    const list = dropDown.querySelector(".items");
    const children = Array.from(list.children);
    children.forEach((child) => {
        child.addEventListener("click", () => {
            onselect(child);
        });
    });

    function subscribe(func) {
        onselect = func;
    }

    return { subscribe };
}

// Use drop-down
// import dropdown from "./drop-down.js";

// const dropDown = dropdown(".drop-down.second");

// dropDown.subscribe((item) => {
//     console.log(item.textContent);
// });
