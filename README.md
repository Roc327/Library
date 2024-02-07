# Library

Odon Project assignment to create a library array of book objects using a book constructor and a function to add an object to the array

#### Assignment instructions

1. If you haven’t already, set up your project with skeleton HTML/CSS and JS files.

2. All of your book objects are going to be stored in an array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.
   Your code should look something like this:

```
const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
```

3.  Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually
    add a few books to your array so you can see the display.
4.  Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
    How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag.
    However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the `submit` input tries to send the data to a
    server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the `event.preventDefault` documentation again
    and see how you can solve this issue!
5.  Add a button on each book’s display to remove the book from the library.
    - You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
6.  Add a button on each book’s display to change its read status.
    - To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.
