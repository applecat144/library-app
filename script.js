let myLibrary = []; // this is where all the books will be stored
let currentBook = 0;

let emptyLibrary = document.createElement('td')

emptyLibrary.classList.add('empty');
emptyLibrary.textContent = "The library is empty";

document.querySelector('tbody').appendChild(document.createElement('tr').appendChild(emptyLibrary));

document.querySelector('.addNewBook').addEventListener('click', addNewBook);

// This allow to show the book form when clicking the new book button, and hides it when
// completing the form and adding the book or clicking the form's background
document.querySelectorAll('.addNewBook, .form-container, .newBookBtn').forEach((item) => {
    item.addEventListener('click', () => {
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

    if (!myLibrary[0]) { console.log('failure'); return; }

    if (document.querySelector('.empty')) {
        document.querySelector('tbody').removeChild(document.querySelector('.empty'));
    }

    let newBook = document.createElement('tr');

    newBook.classList.add(`book`);

    for (let property in myLibrary[currentBook]) {
        
        if (property !== 'readStatus'){
        let newCell = document.createElement('td');
        newCell.textContent = `${myLibrary[currentBook][property]}`
        newBook.appendChild(newCell);
        } else {
            continue;
        }
    }

    let btnCell = document.createElement('td');
    let btnDiv = document.createElement('div')

    let toggleRead = document.createElement('button')

    toggleRead.classList.add('toggleRead');

    if (myLibrary[currentBook]['readStatus'] === '1') {
        toggleRead.classList.add('toggle-yes');
    } else {
        toggleRead.classList.add('toggle-no');
    }
    btnDiv.appendChild(toggleRead)

    let removeBtn = document.createElement('button');

    removeBtn.classList.add('remove');
    btnDiv.appendChild(removeBtn);

    btnCell.appendChild(btnDiv);
    newBook.appendChild(btnCell);

    document.querySelector('tbody').appendChild(newBook);

    identifyBook();

    document.querySelectorAll('.remove').forEach((button) => {
        button.addEventListener('click', removeBook);

    })

    document.querySelectorAll('.toggleRead').forEach((button) => {
        button.addEventListener('click', toggleReadFunc);
    })

    currentBook++;
}

function identifyBook() { //this function number the books in the order they're displayed
    let books = document.querySelectorAll(".book");
    let i = 0;

    books.forEach((item) => {
        item.setAttribute('class', `book book-${i}`);
        i++;
    })
}

function removeBook(e) {
    let currBook = e.target.parentNode.parentNode.parentNode.classList[1];
    let currBookIndex = currBook.substr(5);

    document.querySelector('tbody').removeChild(document.querySelector(`.${currBook}`));
    myLibrary.splice(currBookIndex, 1);

    currentBook = myLibrary.length;

    if (!myLibrary[0]) {
        emptyLibrary.classList.add('empty');
        emptyLibrary.textContent = "The library is empty";

        document.querySelector('tbody').appendChild(document.createElement('tr').appendChild(emptyLibrary));
    }
}

function addALot() {

    for (i = 0; i < 50; i++) {
        document.querySelector('.addNewBook').click();
        document.querySelector('.newBookBtn').click();
    }
}

function toggleReadFunc(e) {

    let currBook = e.target.parentNode.parentNode.parentNode.classList[1];
    let currBookIndex = currBook.substr(5);

    if (myLibrary[currBookIndex]['readStatus'] == '1') {
        myLibrary[currBookIndex]['readStatus'] = '0';
        document.querySelector(`.${currBook} .toggleRead`).classList.toggle('toggle-no');
        document.querySelector(`.${currBook} .toggleRead`).classList.toggle('toggle-yes');
    } else {
        myLibrary[currBookIndex]['readStatus'] = '1';
        document.querySelector(`.${currBook} .toggleRead`).classList.toggle('toggle-yes');
        document.querySelector(`.${currBook} .toggleRead`).classList.toggle('toggle-no');
    }

}