let myLibrary = []; // this is where all the books will be stored

function book(name, author, pageNumber, readStatus) { //this is the book constructor
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus;
}

function addNewBook() {
    let name = prompt('Name of the book ?', '')
        , author = prompt('Author of the book ?', '')
        , pageNumber = prompt('Number of pages in the book ?', '')
        , readStatus = prompt('Did you read the book ?', '');

    myLibrary[0] = new book(name, author, pageNumber, readStatus);
}
