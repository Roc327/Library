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
  const mainContainer = document.querySelector(".main-container");

  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    div.classList.add("book-card");
    div.setAttribute("id", `arr[${i}]`);

    div.innerHTML = `<span class="book-title">Title: ${arr[i].title}</span>
      <span class="book-author">Author: ${arr[i].author}</span>
      <span class="book-pages">Pages: ${arr[i].numPages}</span>
      <div class="read-checkbox">
        <input type="checkbox" id="readStatus" name="readStatus">
        <label for="readStatus">Have read.</label>
      </div>`;

    mainContainer.appendChild(div);

    if (arr[i].readStatus == true) {
      document
        .getElementById(`arr[${i}]`)
        .getElementsByTagName("input").readStatus.checked = true;
    }
  }
}

function newBookForm() {
  // Displays a popup form to add a new book when the new button is pressed
  document.getElementById("newBook-form").style.display = "block";
}

function getBookFormInfo() {
  // Enter code to get info from the input fields for the forms when button is pressed
}

// const newButton = document.getElementById("foo");
// newButton.addEventListener("click", foo, false);

addBookToLibrary("American Gods", "Neil Gaiman", 596, true);
addBookToLibrary("Dune", "Frank Hurbert", 894, false);
addBookToLibrary("The Gunslinger", "Stephen King", 1092, true);
displayBooks(myLibrary);
