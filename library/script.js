
let addBookButton = document.querySelector(".add-button");
let addBookDialog = document.querySelector(".add-book-dialog");
let closeDialog = document.querySelector('.add-book-dialog button[type="button"]');

// let myLibrary = [];

// function Book(title, author, pages, hasRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.hasRead = hasRead;
// }

// Book.prototype.info = function () {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? "have" : "not"} read`
// }

// function addBookToLibrary() {

// }

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

closeDialog.addEventListener("click", () => {
    addBookDialog.close();
});