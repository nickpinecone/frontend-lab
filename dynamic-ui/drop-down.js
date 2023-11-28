// Setup drop-down css
const styles = `
    .drop-down {
        position: relative;
        width: fit-content;
    }

    .drop-down ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        left: 0;
        top: 100%;
        border: 1px solid gray;
    }

    .drop-down ul li {
        background-color: whitesmoke;
    }

    .drop-down ul li:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    .drop-down ul li:active {
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
        const button = dropDown.querySelector("button");
        const list = dropDown.querySelector("ul");
        let active = false;

        function determineWidth() {
            let maxElement = 0;
            const children = Array.from(list.children);
            children.forEach((child) => {
                maxElement = Math.max(maxElement, Number(child.offsetWidth));
            });
            list.style.minWidth = `${maxElement + 2}px`;
            list.style.position = "absolute";
            list.style.display = "none";
        }

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

        button.addEventListener("click", () => {
            changeActive();
        });

        window.addEventListener("click", (event) => {
            if (active && !event.target.matches(".drop-down, .drop-down *")) {
                changeActive();
            }
        });

        determineWidth();
    });
})();

// Interact with drop-downs
export default function (query) {
    const dropDown = document.querySelector(query);
    if (!dropDown.classList.contains("drop-down")) {
        return null;
    }
    const list = dropDown.querySelector("ul");
    const children = Array.from(list.children);
    children.forEach((child) => {
        child.addEventListener("click", () => {
            ondone(child);
        });
    });

    let ondone = function (value) {};

    function subscribe(func) {
        ondone = func;
    }

    return { subscribe };
}
