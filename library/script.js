const form = document.querySelector("form");
const container = document.querySelector(".container");

const addButton = document.querySelector(".add");
const doneButton = document.querySelector(".done");
const closeButton = document.querySelector(".close");

function Book(title, author, pages, read, number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.number = number;
}
let numOfBooks = 0;

addButton.addEventListener("click", triggerFormVisibility);

doneButton.addEventListener("click", () => {
    if(form.checkValidity()) {
        const data = Object.fromEntries(new FormData(form).entries());
        let bookObject = new Book(data.title, data.author, data.pages, (data.status == "on") ? true : false, numOfBooks);
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
        // localStorage.books = "";

        const books = localStorage.books.slice(0, localStorage.books.length-1);
        const booksArray = books.split("~");
        booksArray.forEach((book) => {
            const bookObject = JSON.parse(book);
            addBook(bookObject);
        });

        const bookObject = JSON.parse(booksArray[booksArray.length-1]);
        numOfBooks = bookObject.number + 1;
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
    book.setAttribute("number", bookObject.number);

    createBookData(book, bookObject);

    container.appendChild(book);
    numOfBooks++;
    console.log(book);
}

function createBookData(book, bookObject) {
    for (const key in bookObject) {
        if(key == "read") {
            const statusButton = document.createElement("button");
            statusButton.textContent = "Read: ";
            statusButton.classList.add("status");
            statusButton.classList.add(bookObject[key] ? "read" : "not-read");

            statusButton.addEventListener("click", () => changeStatus(statusButton, book));

            book.appendChild(statusButton);
            break;
        }
        
        const label = document.createElement("label");
        label.textContent = key[0].toUpperCase() + key.slice(1) + ": ";
        const div = document.createElement("input");
        div.classList.add(key);
        label.appendChild(div);

        div.value = bookObject[key];
        book.appendChild(label);
        div.disabled = true;

        const delimiter = document.createElement("div");
        delimiter.classList.add("delimiter");
        book.appendChild(delimiter);
    }

    const editButton = document.createElement("button");
    editButton.classList.add("remove");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editBook(editButton, book));
    book.appendChild(editButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeBook(book));
    book.appendChild(removeButton);

}

function changeStatus(button, book) {
    if(button.classList.contains("read")) {
        button.classList.remove("read");
        button.classList.add("not-read");
    }
    else {
        button.classList.remove("not-read");
        button.classList.add("read");
    }

    const books = localStorage.books.slice(0, localStorage.books.length-1);
    const booksArray = books.split("~");

    let i = 0;
    booksArray.forEach((bookObjectEl) => {
        const bookObject = JSON.parse(bookObjectEl);
        bookObject.read = !bookObject.read;

        if(bookObject.number == book.getAttribute("number")) {
            const newArray = booksArray.slice(0);

            newArray.splice(i, 1, JSON.stringify(bookObject));
            localStorage.books = (newArray.length > 0) ? newArray.join("~") + "~" : "";
        }
        i++;
    });
}

function removeBook(book) {
    const books = localStorage.books.slice(0, localStorage.books.length-1);
    const booksArray = books.split("~");

    let i = 0;
    booksArray.forEach((bookObjectEl) => {
        const bookObject = JSON.parse(bookObjectEl);
        if(bookObject.number == book.getAttribute("number")) {
            const newArray = booksArray.slice(0);
            newArray.splice(i, 1);
            localStorage.books = (newArray.length > 0) ? newArray.join("~") + "~" : "";
        }
        i++;
    });

    container.removeChild(book);
}

function editBook(editButton, book) {
    const inputs = book.querySelectorAll("input");

    if(editButton.textContent == "Edit") {
        editButton.textContent = "Done";
        inputs.forEach((el) => {
            el.disabled = false;
        });
    }
    else {
        editButton.textContent = "Edit";
        inputs.forEach((el) => {
            el.disabled = true;
        });

        const books = localStorage.books.slice(0, localStorage.books.length-1);
        const booksArray = books.split("~");

        let i = 0;
        booksArray.forEach((bookObjectEl) => {
            const bookObject = JSON.parse(bookObjectEl);
            if(bookObject.number == book.getAttribute("number")) {
                const newBookObject = new Book(
                    book.querySelector("input[class=\"title\"]").value, 
                    book.querySelector("input[class=\"author\"]").value, 
                    book.querySelector("input[class=\"pages\"]").value, 
                    book.querySelector(".status").classList.contains("read") ? true : false, 
                    Number(book.getAttribute("number"))
                );

                booksArray.splice(i, 1, JSON.stringify(newBookObject));
                localStorage.books = booksArray.join("~") + "~";
            }
            i++;
        });
    }
}