let myLibrary = [];
let id = 0;
const bookName = document.getElementById("name");
const authorName = document.getElementById("author");
const pages = document.getElementById("pages");
const readCheckbox = document.getElementById("read");
const submitButton = document.querySelector(".create-book__button")
const form = document.querySelector("form");
const cardsContainer = document.querySelector(".cards");

class Book {
    constructor (title, author, pages, readCheckbox, id) {
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
    if(bookName.value.length === 0 || authorName.value.length === 0) {
        alert("Please fill all of the fields");
        return
    }
    const newBook = new Book(bookName.value, authorName.value, pages.value, readCheckbox.checked, id);
    myLibrary.push(newBook);
    addBookToPage(newBook);
}

function addBookToPage(book) { 


        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.setAttribute('book-id', id);
        id++;

        const bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;
        bookTitle.classList.add("card__title");

        const bookAuthor = document.createElement("h3");
        bookAuthor.textContent = book.author;
        bookAuthor.classList.add("card__author");

        const bookPages = document.createElement("h4");
        bookPages.textContent = book.pages;
        bookPages.classList.add("card__pages");

        const readButton = document.createElement("button");
        readButton.textContent = book.readCheckbox;
        readButton.classList.add("card__read");
        initReadStatus(book, readButton);
        readButton.addEventListener('click', function(e) {updateReadStatus(e,readButton)});


        const containerButton = document.createElement("div");
        containerButton.classList.add("card__container");

        const deleteButton = document.createElement("button"); 
        deleteButton.classList.add("card__delete"); 
        deleteButton.addEventListener('click', removeFromLibrary);

        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.appendChild(bookPages);
        newCard.appendChild(readButton);
        newCard.appendChild(containerButton);
        containerButton.appendChild(deleteButton);
        cardsContainer.appendChild(newCard);
}

function clearFormInput() {
    bookName.value = '';
    authorName.value = '';
    pages.value = '';
    readCheckbox.checked = false;
}

function initReadStatus(book, readButton) {
    if(book.read) {
        readButton.textContent = "Read";
        readButton.style.backgroundColor = "green";
    } else {
        readButton.textContent = "Not Read";
        readButton.style.backgroundColor = "red";
    }
}

function updateReadStatus(e, readButton) {

    if(e.target.textContent === "Read") {
        e.target.textContent = "Not Read";
        readButton.style.backgroundColor = "red";
    } else {
        e.target.textContent = "Read";
        readButton.style.backgroundColor = "green";
    }
}

function removeFromLibrary(e) {
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].id == e.target.parentNode.parentNode.getAttribute('book-id')) {
            myLibrary.splice(i, 1);
            e.target.parentNode.parentNode.remove();
        }
    }
}

form.onsubmit = (event) => {
    event.preventDefault();
    addBookToLibrary();
    clearFormInput();
}