
let addBookButton = document.querySelector(".add-button");
let addBookDialog = document.querySelector(".add-book-dialog");
let closeDialog = document.querySelector('.add-book-dialog button[type="button"]');
let submitDialog = document.querySelector('.add-book-dialog button[type="submit"]');
let form = document.querySelector("form");

let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? "have" : "not"} read`
}

function addBookToLibrary() {

}

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

closeDialog.addEventListener("click", () => {
    addBookDialog.close();
});

submitDialog.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    addBookDialog.close();

    let data = Object.fromEntries(new FormData(form).entries());
    let book = createBook(data);

    document.querySelector(".book-cards").appendChild(book);

    form.reset();
});

function createBook(data) {
    let book = document.createElement("div");
    book.classList.add("book");

    let titleSpan = document.createElement("span");
    titleSpan.textContent = "Title: ";
    let title = document.createElement("textarea");
    title.name = "title";
    title.id = "title";
    title.cols = 16;
    title.rows = 1;
    title.disabled = true;
    title.textContent = data.title;
    titleSpan.appendChild(title);

    book.appendChild(titleSpan);

    let authorSpan = document.createElement("span");
    authorSpan.textContent = "Author: ";
    let author = document.createElement("textarea");
    author.name = "author";
    author.id = "author";
    author.cols = 16;
    author.rows = 1;
    author.disabled = true;
    author.textContent = data.author;
    authorSpan.appendChild(author);

    book.appendChild(authorSpan);

    let pagesSpan = document.createElement("span");
    pagesSpan.textContent = "Pages: ";
    let pages = document.createElement("textarea");
    pages.name = "pages";
    pages.id = "pages";
    pages.cols = 16;
    pages.rows = 1;
    pages.disabled = true;
    pages.textContent = data.pages;
    pagesSpan.appendChild(pages);

    book.appendChild(pagesSpan);

    let readButton = document.createElement("button");
    readButton.id = "read-status";
    readButton.classList.add(data.read == "on" ? "have-read" : "not-read");
    readButton.textContent = data.read == "on" ? "Have Read" : "Not Read";

    book.appendChild(readButton);

    let editButton = document.createElement("button");
    editButton.id = "edit-book";
    editButton.textContent = "Edit Book";

    book.appendChild(editButton);

    let removeButton = document.createElement("button");
    removeButton.id = "remove-book";
    removeButton.textContent = "Remove Book";

    book.appendChild(removeButton);

    return book;
}