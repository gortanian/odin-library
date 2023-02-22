// TODO
// - add remove book button functionality
//      - first, make a function that logs the book index to the console when remove is clicked. start at 
//        the addRemoveButtonListeners() function. 
// - add buttons to change read status

// Library initialization
let myLibrary = [];

// object constructor function
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

// add the info function to Book object prototype
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read === true ? "already read" : "not read yet"
  }`;
};

// Adds book to myLibrary
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

// Removes book from library
function removeBookFromLibrary(target) {
  //TODO
}

// Display form when 'new book' button is pressed
const newBookButton = document.querySelector(".new-book");
newBookButton.addEventListener("click", displayForm);

function displayForm() {
  document.querySelector(".form-container").style.display = "block";
}

// TODO:
// handle missing inputs
// handle duplicate books (shouldn't have same book listed twice in the library)
// make form disappear after submitting
const newBookForm = document.querySelector("form");

newBookForm.addEventListener("submit", function (e) {
  let title = e.target.elements["title"].value;
  let author = e.target.elements["author"].value;
  let pages = e.target.elements["pages"].value;
  let read = e.target.elements["read"].checked;
  addBookToLibrary(title, author, pages, read);
  displayLibrary();
  e.preventDefault();
});

// display library function
function displayLibrary() {
  // clear the previously displayed library first
  document.querySelector(".book-container").innerHTML = "";

  myLibrary.forEach(function (book) {
    const htmlBook = `
    <div class="book">
      <h2>${book.title}</h2>
      <h3>by ${book.author}</h3>
      <div>${book.pages} pages</div>
      <div>${book.read ? "Already read" : "Not read yet"}</div>
      <button class="remove" id="remove-index${myLibrary.indexOf(book)}">Remove</button>
    </div>`;

    document.querySelector(".book-container").innerHTML += htmlBook;
    addRemoveButtonListeners();
  });
}

// add event listeners to remove buttons
function addRemoveButtonListeners() {
  let removalButtons = document.querySelectorAll("button.remove");
  console.log(removalButtons);
}

// Manually enter a few books
addBookToLibrary("The Hobbit", "J.R.R. Tolkein", 295, true);
addBookToLibrary("The Hunger Games", "Suzanne Collins", 384, false);
addBookToLibrary("The Three-Body Problem", "Liu Cixin", 416, false);

displayLibrary();
addRemoveButtonListeners();
