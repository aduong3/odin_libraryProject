const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const hasRead = document.querySelector('#hasRead');

  myLibrary.push(new Book(title.value, author.value, pages.value, hasRead.checked ? 'true' : 'false'));

  LoopThroughBooks();

  title.value = '';
  author.value = '';
  pages.value = '';
  hasRead.checked = false;
}

function LoopThroughBooks() {
  const display = document.querySelector(".display");
  display.innerHTML = '';
  myLibrary.forEach((book, i) => {
    //console.log(book.title, book.author);
    let html = `<div class="card" data-${i}>
        <div class="highlight ${book.hasRead == 'true' ? "green" : "red"}"></div>
        <div class="book-info">
          <h2>${book.title}</h2>
          <h3>${book.author}</h3>
          <p>${book.pages}</p>
        </div>
        <button type="button" class="trashcan">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>trash-can-outline</title>
            <path
              d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
            />
          </svg>
        </button>`;
      display.innerHTML += html;
      html = '';
  });
}

function deleteBook(event){
  let item = event.currentTarget.parentNode;
  let index = item.dataset.value;
  console.log(index);
}

const addButton = document.querySelector('.addBook');
addButton.addEventListener('click', addBookToLibrary);

