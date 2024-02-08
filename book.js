const myLibrary = [];

function Book(title, author, numPages, read) {
  // Constructor for a book Object
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${numPages} pages, ${read}`;
  };
}

function addBookToLibrary() {
  // Do stuff here
}

function displayBooks(arr) {
  for(let i = 0, i < arr.length - 1, i ++) {
    // Code to display book to page. Can use a table to display or each can have their own "card" etc.
  }
}

let testBook = new Book("American Gods", "Neil Gaiman", 560, "Have read");

myLibrary.push(testBook);
