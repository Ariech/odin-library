let myLibrary = [];
const bookName = document.getElementById("name");
const authorName = document.getElementById("author");
const pages = document.getElementById("pages");
const readCheckbox = document.getElementById("read");
const submitButton = document.querySelector(".create-book__button")
const form = document.querySelector("form");
const cardsContainer = document.querySelector(".cards");

class Book {
    constructor (title, author, pages, readCheckbox) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = readCheckbox;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }
}

function addBookToLibrary() {
    if(bookName.value.length === 0 || authorName.value.length === 0) {
        alert("Please fill all of the fields");
        return
    }
    const newBook = new Book(bookName.value, authorName.value, pages.value, readCheckbox.checked);
    myLibrary.push(newBook);
    addBookToPage(newBook);
}

function addBookToPage(book) { 
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        const bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("h3");
        bookAuthor.textContent = book.author;

        const bookPages = document.createElement("h4");
        bookPages.textContent = book.pages;


        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.appendChild(bookPages);
        cardsContainer.appendChild(newCard);
}

function clearFormInput() {
    bookName.value = '';
    authorName.value = '';
    pages.value = '';
    readCheckbox.checked = false;
}


form.onsubmit = (event) => {
    event.preventDefault();
    addBookToLibrary();
    clearFormInput()
}