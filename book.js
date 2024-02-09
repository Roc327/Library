const myLibrary = [];

function Book(title, author, numPages, readStatus) {
  // Constructor for a book Object
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${title} by ${author}, ${numPages} pages, ${readStatus}`;
  };
}

function addBookToLibrary(title, author, numPages, readStatus) {
  const newBook = new Book(title, author, numPages, readStatus);
  myLibrary.push(newBook);
}

function deleteBooks(index) {
  delete myLibrary[index];
}

function displayBooks(arr) {
  let 
  //for (let i = 0; i < arr.length - 1; i++) {
    // Code to display book to page. Can use a table to display or each can have their own "card" etc.
  }
}

const newButton = document.getElementById("foo");
newButton.addEventListener("click", foo, false);

let testBook = new Book("American Gods", "Neil Gaiman", 560, true);

myLibrary.push(testBook);
