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
  // Add a new book object to array
  const newBook = new Book(title, author, numPages, readStatus);
  myLibrary.push(newBook);
}

function deleteBooks(index) {
  // Remove book from array at provided index
  myLibrary.splice(index, 1);
}

function displayBooks(arr) {
  // Iterate array and display the object to the page
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // temp code to test loop
  }
}

// const newButton = document.getElementById("foo");
// newButton.addEventListener("click", foo, false);

addBookToLibrary("American Gods", "Neil Gaiman", 596, true);
