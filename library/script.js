
let myLibrary = [{ index: -1 }];

class Book {
    constructor(title, author, pages, read, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }
}

let addBookButton = document.querySelector(".add-button");
let addBookDialog = document.querySelector(".add-book-dialog");
let closeDialog = document.querySelector('.add-book-dialog button[type="button"]');
let submitDialog = document.querySelector('.add-book-dialog button[type="submit"]');
let form = document.querySelector("form");
let bookCards = document.querySelector(".book-cards");

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

closeDialog.addEventListener("click", () => {
    addBookDialog.close();
});

submitDialog.addEventListener("click", (event) => {
    if (form.checkValidity()) {
        event.preventDefault();
        addBookDialog.close();

        let data = Object.fromEntries(new FormData(form).entries());
        addBookToLibrary(data);
        saveToStorage();

        form.reset();
    }

});

addBookDialog.addEventListener("click", (event) => {
    let dialogDimensions = addBookDialog.getBoundingClientRect();

    if (event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom) {
        addBookDialog.close();
    }
});

function addBookToLibrary(data) {
    let bookBackend = new Book(data.title, data.author, data.pages, data.read == "on" ? true : false, myLibrary[myLibrary.length - 1].index + 1);
    myLibrary.push(bookBackend);

    let book = createBook(data);
    bookCards.appendChild(book);

    const inputs = book.querySelectorAll("textarea");
    inputs.forEach((el) => {
        el.style.height = (el.scrollHeight + 2) + "px";
    });
}

function saveToStorage() {
    localStorage.library = "";
    localStorage.library = JSON.stringify(myLibrary);
}

function readFromStorage() {
    if (localStorage.library) {
        let arr = JSON.parse(localStorage.library);
        if (arr.length > 1) {
            for (let i = 1; i < arr.length; i++) {
                addBookToLibrary({ title: arr[i].title, author: arr[i].author, pages: arr[i].pages, read: arr[i].read ? "on" : "off" });
            }
        }
    }
}

function createTextarea(prefix, name, data) {
    let span = document.createElement("span");
    span.textContent = prefix;
    let element = document.createElement("textarea");
    element.name = name;
    element.id = name;
    element.disabled = true;
    element.value = data;
    span.appendChild(element);

    element.addEventListener("input", () => {
        element.style.height = "1em";
        element.style.height = (element.scrollHeight + 2) + "px";
    });

    return [span, element];
}

function createButton(id, data) {
    let button = document.createElement("button");
    button.id = id;
    button.textContent = data;

    return button;
}

function findBookBackend(book) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (book.getAttribute("data-index") == myLibrary[i].index) {
            let bookBackend = myLibrary[i];

            return bookBackend;
        }
    }
}

function createBook(data) {
    let book = document.createElement("div");
    book.classList.add("book");

    let title = createTextarea("Title: ", "title", data.title);
    book.appendChild(title[0]);

    let author = createTextarea("Author: ", "author", data.author);
    book.appendChild(author[0]);

    let pages = createTextarea("Pages: ", "pages", data.pages);
    book.appendChild(pages[0]);

    let readButton = createButton("read-status", "")
    if (data.read == "on") {
        readButton.classList.add("have-read");
    }
    readButton.textContent = data.read == "on" ? "Have Read" : "Not Read";
    book.appendChild(readButton);

    let editButton = createButton("edit-button", "Edit Book");
    book.appendChild(editButton);

    let removeButton = createButton("remove-button", "Remove Book");
    book.appendChild(removeButton);

    book.setAttribute("data-index", myLibrary[myLibrary.length - 1].index);

    // Bind Buttons

    let bookBackend = findBookBackend(book);

    readButton.addEventListener("click", () => {
        if (readButton.classList.contains("have-read")) {
            readButton.classList.remove("have-read");
            readButton.textContent = "Not Read";

        }
        else {
            readButton.classList.add("have-read");
            readButton.textContent = "Have Read";
        }

        bookBackend.read = !bookBackend.read;

        saveToStorage();
    });

    editButton.addEventListener("click", () => {
        if (editButton.classList.contains("editing")) {
            editButton.classList.remove("editing");
            editButton.textContent = "Edit Book";
        }
        else {
            editButton.classList.add("editing");
            editButton.textContent = "Done Editing";

        }

        bookBackend.title = title[1].value;
        bookBackend.author = author[1].value;
        bookBackend.pages = pages[1].value;

        title[1].disabled = !title[1].disabled;
        author[1].disabled = !author[1].disabled;
        pages[1].disabled = !pages[1].disabled;

        saveToStorage();
    });

    removeButton.addEventListener("click", () => {
        bookCards.removeChild(book);
        myLibrary = myLibrary.filter((el) => el.index != bookBackend.index);

        saveToStorage();
    });

    return book;
}

readFromStorage();
saveToStorage();