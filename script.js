let myLibrary = []; // this is where all the books will be stored

function book(name, author, pageNumber, readStatus) { //this is the book constructor
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus;
}

function addNewBook() {
    let name = document.querySelector("#name").value
        , author = document.querySelector("#author").value
        , pageNumber = document.querySelector("#pageNumber").value
        , readStatus = document.querySelector('input[name="readStatus"]:checked').value;
    console.log("yep");
    myLibrary[0] = new book(name, author, pageNumber, readStatus);
}

document.querySelector('button').addEventListener('click', addNewBook);