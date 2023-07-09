
let myLibrary = [{ index: -1 }];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
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

        form.reset();
    }

});

function addBookToLibrary(data) {
    let bookBackend = new Book(data.title, data.author, data.pages, data.read == "on" ? true : false, myLibrary[myLibrary.length - 1].index + 1);
    myLibrary.push(bookBackend);

    let book = createBook(data);
    bookCards.appendChild(book);
}

function createTextarea(prefix, name, data) {
    let span = document.createElement("span");
    span.textContent = prefix;
    let element = document.createElement("textarea");
    element.name = name;
    element.id = name;
    element.cols = 16;
    element.rows = 1;
    element.disabled = true;
    element.value = data;
    span.appendChild(element);

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
    });

    removeButton.addEventListener("click", () => {
        bookCards.removeChild(book);
        myLibrary = myLibrary.filter((el) => el.index != bookBackend.index);
    });

    return book;
}

addBookToLibrary({ title: "Gunslinger", author: "Stephen King", pages: 310, read: "on" });