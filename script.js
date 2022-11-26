let myLibrary = []; // this is where all the books will be stored
let currentBook = 0;

document.querySelector('.addNewBook').addEventListener('click', addNewBook);

// This allow to show the book form when clicking the new book button, and hides it when
// completing the form and adding the book or clicking the form's background
document.querySelectorAll('.addNewBook, .form-container, .newBookBtn').forEach((item) => {
    item.addEventListener('click', () => {
        console.log('damn')
        document.querySelector('.form-container').classList.toggle('shown');
    })
});

// This prevents clicks on the form or the form's elements to propagate the event to the background
// and close the form
document.querySelectorAll('form, form *').forEach((item) => {

    item.addEventListener('click', (e) => {

        e.stopPropagation();
    })
})

function book(name, author, pageNumber, readStatus) { //this is the book constructor
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus;
}


function addNewBook() { //this compute new book form input to create a new book and add it to myLibrary.

    let name = document.querySelector("#name").value
        , author = document.querySelector("#author").value
        , pageNumber = document.querySelector("#pageNumber").value
        , readStatus = document.querySelector('input[name="readStatus"]:checked').value;
    myLibrary[currentBook] = new book(name, author, pageNumber, readStatus);
    displayBook();
}

function displayBook() {

    let newBook = document.createElement('tr');

    newBook.classList.add(`book${currentBook}`);

    for (let property in myLibrary[currentBook]) {
        let newCell = document.createElement('td');
        newCell.textContent = `${myLibrary[currentBook][property]}`
        newBook.appendChild(newCell);
    }

    document.querySelector('tbody').appendChild(newBook);

    currentBook++;
}