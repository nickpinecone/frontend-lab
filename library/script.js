const form = document.querySelector("form");
const container = document.querySelector(".container");

const addButton = document.querySelector(".add");
const doneButton = document.querySelector(".done");
const closeButton = document.querySelector(".close");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addButton.addEventListener("click", triggerFormVisibility);

doneButton.addEventListener("click", () => {
    if(form.checkValidity()) {
        const data = Object.fromEntries(new FormData(form).entries());
        let bookObject = new Book(data.title, data.author, data.pages, (data.status == "on") ? true : false);
        localStorage.books += JSON.stringify(bookObject) + "~";
        addBook(bookObject);

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

accessLocalStorage();

function accessLocalStorage() {
    if(localStorage.books) {
        const books = localStorage.books.slice(0, localStorage.books.length-1);
        const booksArray = books.split("~");
        booksArray.forEach((book) => {
            const bookObject = JSON.parse(book);
            addBook(bookObject);
        });
    }
    else {
        localStorage.books = "";
    }
}

function triggerFormVisibility() {
    form.style.visibility = (form.style.visibility == "visible") ? "hidden" : "visible";
}

function addBook(bookObject) {
    const book = document.createElement("div");
    book.classList.add("book");

    for (const key in bookObject) {
        if(key == "read") {
            const button = document.createElement("button");
            button.textContent = "Read: ";
            button.classList.add("status");
            button.classList.add(bookObject[key] ? "read" : "not-read");

            button.addEventListener("click", () => {
                if(button.classList.contains("read")) {
                    button.classList.remove("read");
                    button.classList.add("not-read");
                }
                else {
                    button.classList.remove("not-read");
                    button.classList.add("read");
                }
            });

            book.appendChild(button);
            break;
        }
        
        const div = document.createElement("div");
        div.textContent = key[0].toUpperCase() + key.slice(1) + ": " + bookObject[key];
        book.appendChild(div);

        const delimiter = document.createElement("div");
        delimiter.classList.add("delimiter");
        book.appendChild(delimiter);
    }

    const button = document.createElement("button");
    button.classList.add("remove");
    button.textContent = "Remove";
    button.addEventListener("click", () => {
        container.removeChild(book);
    });
    book.appendChild(button);

    container.appendChild(book);
}