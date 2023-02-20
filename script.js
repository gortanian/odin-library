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
newBookButton.addEventListener("click", displayForm);

function displayForm() {
  document.querySelector(".form-container").style.display = "block";
}
// TODO: 
// handle missing inputs
// handle duplicate books (shouldn't have same book listed twice in the library)
const newBookForm = document.querySelector("form");

newBookForm.addEventListener("submit", function(e) {
  
  let title = e.target.elements['title'].value;
  let author = e.target.elements['author'].value;
  let pages = e.target.elements['pages'].value;
  let read = e.target.elements['read'].checked; 
  console.log(read);
  addBookToLibrary(title, author, pages, read);
  displayLibrary();
  e.preventDefault();
});


// display library function
function displayLibrary() {
  
  // clear the previously displayed library first
  document.querySelector(".book-container").innerHTML = '';

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