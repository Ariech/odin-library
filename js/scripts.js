let myLibrary = [];
const bookName = document.querySelector("#name");
const authorName = document.querySelector("#author");
const pages = document.querySelector("#pages");
const submitButton = document.querySelector(".create-book__button")

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

function addBookToLibrary(event) {  
    const newBook = new Book(bookName.value, authorName.value, pages.value)
    myLibrary.push(newBook);
    event.preventDefault();
}

submitButton.addEventListener('click', addBookToLibrary);
