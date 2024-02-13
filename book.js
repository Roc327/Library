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
  mainContainer.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    div.classList.add("book-card");
    div.setAttribute("id", `arr[${i}]`);

    const removeButtonID = `${i}`;

    div.innerHTML = `<span class="book-title">Title: ${arr[i].title}</span>
      <span class="book-author">Author: ${arr[i].author}</span>
      <span class="book-pages">Pages: ${arr[i].numPages}</span>
      <div class="read-checkbox">
        <input type="checkbox" id="readStatus" name="readStatus">
        <label for="readStatus">Have read.</label>
        <button class="removeButton" id=${removeButtonID}>Remove Book</button>
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

function getFormInfo() {
  const form = document.getElementById("book-form");
  event.preventDefault();

  const title = form.bookTitle.value;
  const author = form.bookAuthor.value;
  const pages = form.bookPages.value;

  if (document.getElementById("read-yes").checked) {
    addBookToLibrary(title, author, pages, true);
  } else {
    addBookToLibrary(title, author, pages, false);
  }

  displayBooks(myLibrary);
  form.reset();

  document.getElementById("newBook-form").style.display = "none";
}

addBookToLibrary("American Gods", "Neil Gaiman", 596, true);
addBookToLibrary("Dune", "Frank Herbert", 894, false);
addBookToLibrary("The Gunslinger", "Stephen King", 1092, true);
displayBooks(myLibrary);
