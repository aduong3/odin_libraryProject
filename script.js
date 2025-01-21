const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead) {
  myLibrary.push(new Book(title, author, pages, hasRead));
}

function LoopThroughBooks() {
  const table = document.querySelector("table");

  myLibrary.forEach((book) => {
    console.log(book.title, book.author);
    // let html = `<tr>
    // <td>${book.title}</td>
    // <td>${book.author}</td>
    // </tr>`;
    // table.innerHTML += html;
  });
}

addBookToLibrary("test", "test-author");
LoopThroughBooks();
