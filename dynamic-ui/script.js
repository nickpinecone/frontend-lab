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
        background: whitesmoke;
        border: 1px solid gray;
    }

    .drop-down ul li:hover {
        cursor: pointer;
        background-color: darkgray;
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
