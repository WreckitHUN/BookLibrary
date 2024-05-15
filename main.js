const newBookButton = document.querySelector("#addBook");
const bookModal = document.querySelector(".bookModal");
const closeModal = document.querySelector(".iconClose");
const form = document.querySelector("#bookForm");

// Get the form elements
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const add = document.querySelector('#add'); 

const bookShelf = document.querySelector(".bookShelf");

const myLibrary = [];

let idNumber = 0;

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

bookModal.addEventListener("close", () => {
    form.reset();
})

newBookButton.addEventListener("click", () =>{
    bookModal.showModal();
});

closeModal.addEventListener("click", () => {
    bookModal.close();
});


function handleFormSubmit(event) {
    event.preventDefault();
  
    let newBook = new Book(idNumber, title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
    console.log(myLibrary);
    idNumber++;
  }
  
form.addEventListener('submit', handleFormSubmit);
form.addEventListener('submit', () => {bookModal.close();});

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


