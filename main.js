const theHobbit = {
    id: 0,
    title: "The Hobbit",
    author: "J.R.R.",
    pages: 295,
    read: false,
};


const newBookButton = document.querySelector("#listBooks");
const bookShelf = document.querySelector(".bookShelf");

const myLibrary = [theHobbit,];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
       return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`; 
    }
}

function addBookToLibrary(){

}

function createBook(){
    
}

function listBooks(){
    myLibrary.forEach((item) =>{

        /* Creating the book */
        let book = document.createElement("div");
        book.classList.add("book");
        book.setAttribute("id", `${item.id}`);

        /* Adding the elements of the book */
        let title = document.createElement("div");
        title.textContent = item.title;
        title.classList.add("book__title");
        let author = document.createElement("div");
        author.textContent = item.author;
        author.classList.add("book__author");
        let pages = document.createElement("div");
        pages.textContent = item.pages;
        pages.classList.add("book__pages");
        let read = document.createElement("div");
        read.textContent = item.read ? "+" : "X";
        read.classList.add("book__read");

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);

        bookShelf.append(book);
    });


}


