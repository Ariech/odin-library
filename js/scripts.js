let myLibrary = [];
let id = 0;
let formOpen = false;
let green = "#51A551";
let gray = "#888385";
const bookName = document.getElementById("name");
const authorName = document.getElementById("author");
const pages = document.getElementById("pages");
const readCheckbox = document.getElementById("read");
const submitButton = document.querySelector(".create-book__button");
const form = document.querySelector("form");
const cardsContainer = document.querySelector(".cards");
const formButton = document.querySelector(".button-display");
const overlay = document.querySelector(".overlay");
const cancelButton = document.querySelector(".book__button--cancel");

class Book {
    constructor(title, author, pages, readCheckbox, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = readCheckbox;
        this.id = id;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }
}

function addBookToLibrary() {
    if (bookName.value.length === 0 || authorName.value.length === 0) {
        alert("Please fill all of the fields");
        return;
    }
    const newBook = new Book(
        bookName.value,
        authorName.value,
        pages.value,
        readCheckbox.checked,
        id
    );
    myLibrary.push(newBook);
    addBookToPage(newBook);
}

function addBookToPage(book) {
    const newCard = document.createElement("div");
    newCard.classList.add("cards__card");
    newCard.setAttribute("book-id", id);
    id++;

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    bookTitle.classList.add("card__description");
    bookTitle.classList.add("card__description--title");

    const bookAuthor = document.createElement("h3");
    bookAuthor.textContent = `Author: ${book.author}`;
    bookAuthor.classList.add("card__description");
    bookAuthor.classList.add("card__description--author");

    const bookPages = document.createElement("h4");
    bookPages.textContent = `Pages: ${book.pages}`;
    bookPages.classList.add("card__description");
    bookPages.classList.add("card__description--pages");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button__container");

    const readButton = document.createElement("button");
    readButton.textContent = book.readCheckbox;
    readButton.classList.add("card__description");
    readButton.classList.add("card__description--read");

    initReadStatus(book, readButton);

    readButton.addEventListener("click", function (e) {
        updateReadStatus(e, readButton);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("card__description");
    deleteButton.classList.add("card__description--delete");
    deleteButton.addEventListener("click", removeFromLibrary);

    newCard.appendChild(bookTitle);
    newCard.appendChild(bookAuthor);
    newCard.appendChild(bookPages);
    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(deleteButton);
    newCard.appendChild(buttonContainer);
    cardsContainer.appendChild(newCard);
    closeFormDisplay();
}

function clearFormInput() {
    bookName.value = "";
    authorName.value = "";
    pages.value = "";
    readCheckbox.checked = false;
}

function closeFormDisplay() {
    form.style.transform = "scale(0)";
    overlay.style.opacity = "0";
    formOpen = false;
}

function initReadStatus(book, readButton) {
    if (book.read) {
        readButton.textContent = "Read";
        readButton.style.backgroundColor = green;
    } else {
        readButton.textContent = "Not Read";
        readButton.style.backgroundColor = gray;
    }
}

function updateReadStatus(e, readButton) {
    if (e.target.textContent === "Read") {
        e.target.textContent = "Not Read";
        readButton.style.backgroundColor = gray;
    } else {
        e.target.textContent = "Read";
        readButton.style.backgroundColor = green;
    }
}

function removeFromLibrary(e) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (
            myLibrary[i].id ==
            e.target.parentNode.parentNode.getAttribute("book-id")
        ) {
            myLibrary.splice(i, 1);
            e.target.parentNode.parentNode.remove();
        }
    }
}

formButton.addEventListener("click", () => {
    if (formOpen) {
        form.style.transform = "scale(0)";
        overlay.style.opacity = "0";
        formOpen = false;
    } else {
        form.style.transform = "scale(1)";
        overlay.style.opacity = "1";
        formOpen = true;
    }
});

cancelButton.addEventListener("click", () => {
    if (formOpen) {
        form.style.transform = "scale(0)";
        overlay.style.opacity = "0";
        formOpen = false;
    } else {
        form.style.transform = "scale(1)";
        overlay.style.opacity = "1";
        formOpen = true;
    }
});

form.onsubmit = (event) => {
    event.preventDefault();
    addBookToLibrary();
    clearFormInput();
};
