// const button = document.querySelector(".status");

const addButton = document.querySelector(".add");
const form = document.querySelector("form");
const container = document.querySelector(".container");

form.style.visibility = "hidden";
addButton.addEventListener("click", addBook);

function addBook() {
    form.style.visibility = "visible";
    const submitButton = document.querySelector(".done");
    const closeButton = document.querySelector(".close");

    closeButton.addEventListener("click", () => {
        form.reset();
        form.style.visibility = "hidden";
    });

    submitButton.addEventListener("click", () => {
        if(form.checkValidity()) {
            createBookEntry();
            form.reset();
            form.style.visibility = "hidden";
        }
        else {
            form.reportValidity();
        }
    });
}

function createBookEntry() {
    const book = document.createElement("div");
    book.classList.add("book");

    const titleInput = document.querySelector("#title");
    const title = document.createElement("div");
    title.textContent = "Title: " + titleInput.value;
    book.appendChild(title);

    let delimiter = document.createElement("div");
    delimiter.classList.add("delimiter");
    book.appendChild(delimiter);

    const authorInput = document.querySelector("#author");
    const author = document.createElement("div");
    author.textContent = "Author: " + authorInput.value;
    book.appendChild(author);

    delimiter = document.createElement("div");
    delimiter.classList.add("delimiter");
    book.appendChild(delimiter);

    const pagesInput = document.querySelector("#pages");
    const pages = document.createElement("div");
    pages.textContent = "Pages: " + pagesInput.value;
    book.appendChild(pages);

    delimiter = document.createElement("div");
    delimiter.classList.add("delimiter");
    book.appendChild(delimiter);

    const statusInput = document.querySelector("#status");
    const status = document.createElement("button");
    status.classList.add("status");
    status.textContent = "Read: ";
    statusInput.value ? status.classList.add("read") : status.classList.add("not-read");

    status.addEventListener("click", () => {
        if(status.classList.contains("not-read")) {
            status.classList.remove("not-read");
            status.classList.add("read");
        }
        else {
            status.classList.remove("read");
            status.classList.add("not-read");
        }
    });
    book.appendChild(status);

    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
        container.removeChild(book);
    });
    book.appendChild(remove);

    container.appendChild(book);
}