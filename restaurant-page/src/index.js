import './style.css';

import createHome from './home';
import createContact from './contact';
import createMenu from './menu';


let buttons = document.querySelectorAll(".tab");

buttons.forEach((button) => {
    button.addEventListener("click", (el) => {
        switchTab(el.target);
    });
});

let content = document.getElementById("content");
content.appendChild(createHome());

function switchTab(el) {
    content.replaceChildren([]);

    if (el.classList.contains("home")) {
        content.appendChild(createHome());
    }
    else if (el.classList.contains("contact")) {
        content.appendChild(createContact());
    }
    else if (el.classList.contains("menu")) {
        content.appendChild(createMenu());
    }
}

