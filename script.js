// TODO
// - add a new book button and form
// - add remove book buttons
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
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "already read" : "not read yet"
    }`;
};

// Adds book to myLibrary
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

// Display form when 'new book' button is pressed
const newBookButton = document.querySelector('.new-book');
console.log(newBookButton);

newBookButton.addEventListener("click", displayForm);

function displayForm() {
  let form = `
  <form>
    <label for="title">Book Title:</label>
    <input type="text" id="title" name="title">
    <label for="author">Author:</label>
    <input type="text" id="author" name="author">
    <label for="pages">Pages:</label>
    <input type="number" id="pages" name="pages">
    <label for="read">Already read:</label>
    <input type="checkbox" id="read" name="read">
    <input type="submit">
  </form>`;

  document.querySelector(".form-container").innerHTML = form;
  console.log("displayForm has been run");
}

// display library function
function displayLibrary() {
  myLibrary.forEach(function (book) {
    const htmlBook = `
    <div class="book">
      <h2>${book.title}</h2>
      <h3>by ${book.author}</h3>
      <div>${book.pages} pages</div>
      <div>${book.read ? "Already read" : "Not read yet"}</div>
    </div>`;

    document.querySelector(".book-container").innerHTML += htmlBook;
  });
}

// Manually enter a few books
addBookToLibrary("The Hobbit", "J.R.R. Tolkein", 295, true);
addBookToLibrary("The Hunger Games", "Suzanne Collins", 384, false);
addBookToLibrary("The Three-Body Problem", "Liu Cixin", 416, false);

displayLibrary();