let myLibrary = [];
const bookName = document.querySelector("#name");
const authorName = document.querySelector("#author");
const pages = document.querySelector("#pages");
const submitButton = document.querySelector(".create-book__button")
const form = document.querySelector("form");
const cardsContainer = document.querySelector(".cards");

class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
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
    const newBook = new Book(bookName.value, authorName.value, pages.value)
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
}


form.onsubmit = (event) => {
    event.preventDefault();
    addBookToLibrary();
    clearFormInput()
}
