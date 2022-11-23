let myLibrary = []; // this is where all the books will be stored

function book(name, author, pageNumber, readStatus) { //this is the book constructor
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus;
}

/* function addNewBook() {
    let name = document.querySelector("#name").value
        , author = document.querySelector("#author").value
        , pageNumber = document.querySelector("#pageNumber").value
        , readStatus = document.querySelector('input[name="readStatus"]:checked').value;
    myLibrary[0] = new book(name, author, pageNumber, readStatus);
    preventDefault();
} */

function displayBook() {

    for (i = 0; i <= myLibrary.length; i++) {

        let newBook = document.createElement('tr');

        newBook.classList.add(`book${i}`);

        for (let property in myLibrary[i]) {
            let newCell = document.createElement('td');
            newCell.textContent = `${myLibrary[i][property]}`
            newBook.appendChild(newCell);
            console.log("done");

        }

        document.querySelector('tbody').appendChild(newBook);
        
    }
}

function dummyBooks() {
    for (i = 0; i < 50; i++) {
        myLibrary[i] = new book("azea", "trtrt", 58, "y")
    }
}

dummyBooks();
displayBook();
// document.querySelector('button').addEventListener('click', addNewBook);