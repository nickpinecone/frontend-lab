const form = document.querySelector("form");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const container = document.querySelector(".container");
const addButton = document.querySelector(".add");
addButton.addEventListener("click", triggerFormVisibility);

function triggerFormVisibility() {
    form.style.visibility = (form.style.visibility == "visible") ? "hidden" : "visible";
}

const doneButton = document.querySelector(".done");
const closeButton = document.querySelector(".close");

doneButton.addEventListener("click", () => {
    if(form.checkValidity()) {
        addBook();

        form.reset();
        triggerFormVisibility();
    }
    else {
        form.reportValidity();
    }
});

closeButton.addEventListener("click", () => {
    form.reset();
    triggerFormVisibility();
});

function addBook() {
    const data = Object.fromEntries(new FormData(form).entries());
    let bookObject = new Book(data.title, data.author, data.pages, (data.status == "on") ? true : false);

    const book = document.createElement("div");
    book.classList.add("book");

    for (const key in bookObject) {
        if(key == "read") {
            break;
        }
        
        const div = document.createElement("div");
        div.textContent = key[0].toUpperCase() + key.slice(1) + ": " + bookObject[key];
        book.appendChild(div);

        const delimiter = document.createElement("div");
        delimiter.classList.add("delimiter");
        book.appendChild(delimiter);
    }

    container.appendChild(book);
}