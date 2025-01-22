const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.editStatus = function (i) {
  //console.log(myLibrary[i].hasRead);
  myLibrary[i].hasRead = myLibrary[i].hasRead == "true" ? "false" : "true";

  LoopThroughBooks();
};

function addBookToLibrary(e) {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const hasRead = document.querySelector("#hasRead");
  console.log(title.value.length);
  if (
    title.value.length != 0 &&
    author.value.length != 0 &&
    pages.value.length != 0
  ) {
    myLibrary.push(
      new Book(
        title.value,
        author.value,
        pages.value,
        (hasRead.value = hasRead.checked ? "true" : "false")
      )
    );

    title.value = "";
    author.value = "";
    pages.value = "";
    hasRead.checked = false;
  }
  LoopThroughBooks();
}

function LoopThroughBooks() {
  const display = document.querySelector(".display");
  display.innerHTML = "";
  myLibrary.forEach((book, i) => {
    let textNode = "";

    const card = document.createElement("div");
    card.classList.add("card");
    const highlight = document.createElement("div");
    highlight.classList.add(
      "highlight",
      book.hasRead == "true" ? "green" : "red"
    );
    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");
    const bookTitle = document.createElement("h2");
    textNode = document.createTextNode(book.title);
    bookTitle.appendChild(textNode);
    const bookAuthor = document.createElement("h3");
    textNode = document.createTextNode(book.author);
    bookAuthor.appendChild(textNode);
    const bookPages = document.createElement("p");
    textNode = document.createTextNode(book.pages);
    bookPages.appendChild(textNode);

    const buttonList = document.createElement("div");
    buttonList.classList.add("button-list");

    const button = document.createElement("button");
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
             <title>trash-can-outline</title>
            <path
               d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
             />
           </svg>`;
    button.addEventListener("click", () => deleteBook(i));
    buttonList.appendChild(button);

    const editButton = document.createElement("button");
    //console.log(hasRead.value);
    if (book.hasRead == "false") {
      editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>check-outline</title>
              <path
                d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z"
              />
            </svg>`;
      editButton.classList.add("notRead");
    } else if (book.hasRead == "true") {
      editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>close-outline</title>
              <path
                d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z"
              />
            </svg>`;
      editButton.classList.add("hasRead");
    }
    editButton.addEventListener("click", () => book.editStatus(i));
    buttonList.appendChild(editButton);

    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);
    card.appendChild(highlight);
    card.appendChild(bookInfo);
    card.appendChild(buttonList);
    display.appendChild(card);
  });
}

function deleteBook(i) {
  myLibrary.splice(i, 1);
  LoopThroughBooks();
}

const addButton = document.querySelector(".addBook");
addButton.addEventListener("click", addBookToLibrary);
