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

let myLibrary = [];

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
    
  }
  
form.addEventListener('submit', handleFormSubmit);
form.addEventListener('submit', () => {bookModal.close();});
form.addEventListener("submit", putBookToShelf);

function putBookToShelf(){
    // Create main book div
    let bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.id = idNumber;
    idNumber++;

    // Create book title div
    let titleDiv = document.createElement('div');
    titleDiv.className = 'book__title';
    let titleP = document.createElement('p');
    titleP.textContent = title.value;
    titleDiv.appendChild(titleP);

    // Create book author div
    let authorDiv = document.createElement('div');
    authorDiv.className = 'book__author';
    let authorP = document.createElement('p');
    authorP.textContent = author.value;
    authorDiv.appendChild(authorP);

    // Create book pages div
    let pagesDiv = document.createElement('div');
    pagesDiv.className = 'book__pages';
    let pagesP = document.createElement('p');
    pagesP.textContent = pages.value;
    pagesDiv.appendChild(pagesP);

    // Create read button
    let readButton = document.createElement('button');
    readButton.className = `btn ${read.checked ? "btn--green" : "btn--red"}`;
    let readEm = document.createElement('em');
    readEm.textContent = `${read.checked ? "Read" : "Not red yet"}`;
    readButton.addEventListener("click", () => {

        if (readButton.classList.contains("btn--green")){
            readEm.textContent = "Not red yet";
        } else {
            readEm.textContent = "Read";
        }

        readButton.classList.toggle("btn--green");
        readButton.classList.toggle("btn--red");

        // Update the corresponding book in the myLibrary array
        let bookToUpdate = myLibrary.find((book) => book.id === parseInt(bookDiv.id));
        if (bookToUpdate) {
            bookToUpdate.read = !bookToUpdate.read;
            console.log(myLibrary);
        }
    })
    readButton.appendChild(readEm);

    // Create remove button
    let removeButton = document.createElement('button');
    removeButton.addEventListener("click", () => {
        bookDiv.remove();
        let newLibrary = myLibrary.filter((book) => book.id !== parseInt(bookDiv.id));
        myLibrary = newLibrary;
        console.log(myLibrary);
    })
    removeButton.className = 'btn btn--red';
    let removeEm = document.createElement('em');
    removeEm.textContent = 'Remove';
    removeButton.appendChild(removeEm);

    // Append all elements to the main book div
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(removeButton);

    // Append the book div to the body (or any other container)
    bookShelf.appendChild(bookDiv);

}




