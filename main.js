/* eslint-disable*/
let bookCard = document.body.querySelector(".books");

const myLibrary = [];
const openButton = document.body.querySelector(".openform");
openButton.addEventListener("click", function () {
  document.querySelector(".form").style.display = "flex";
});
let span = document.getElementsByClassName("close")[0];
let popup = document.querySelector(".form")

span.onclick = function() {
  popup.style.display = "none";
}

function Book(title, author, pages, bookImage, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookImage = bookImage;
  this.isRead = isRead;
}
function bookDisplay() {
  
  const book = myLibrary.at(-1);
  let bookElement = `
       <div class = "book-card">
          <h1>${book.title}</h1>
          <h3>${book.author}</h3>
          <h3>${book.pages}</h3>
          <img src = ${book.image}/>
          <h3>${book.isRead}</h3>
          <button class ="read-status">Read Status</button>
          <button class ="remove-book">Remove Book</button>
       </div>
       `;
        bookCard.innerHTML += bookElement;
    // let readStatusBtn = document.querySelector(".read-status");
    // let removeBook = document.querySelector("remove-book");
    
    readStatusBtn.setAttribute("data-index", myLibrary.indexOf(bookDisplay));

    bookCard.setAttribute("data-index", myLibrary.indexOf(bookDisplay));

    bookCard.append(removeBook);
    function changeBook(e) {
        if (e.target.classList.contains("remove-book")) {
          let index = e.target.getAttribute('data-index');
          let bookToRemove = document.querySelector(`[data-index="${index}"]`);
          container.removeChild(bookToRemove);
          myLibrary.splice(index,1);
        }
        else if (e.target.classList.contains("readStatusBtn")) {
          let index = e.target.getAttribute('data-index');
          let bookToChange = document.querySelector(`[data-index="${index}"]`);
          let readStatus = bookToChange.querySelector('.isReadStatus');
          if (readStatus.innerHTML === "Read") {
            readStatus.innerHTML = "Not Read";
            myLibrary[index].isRead = "Not Read";
          } else {
            readStatus.innerHTML = "Read";
            myLibrary[index].isRead = "Read";
      
          }
      
        }
      }
      readStatusBtn.addEventListener("click", changeBook);
    }    

function addBookToLibrary(title, author, pages, bookImage, isRead) {
  let book = new Book(title, author, pages, bookImage, isRead);
  myLibrary.push(book);
}

function handleSubmit(e) {
  e.preventDefault();
  let title = document.querySelector("#formTitle").value;
  let author = document.querySelector("#formAuthor").value;
  let pages = document.querySelector("#formPages").value;
  let bookImage = document.querySelector("#formImage").value;
  let read = document.querySelector("#form-Read").value;
  let notRead = document.querySelector("#form-NotRead").value;

  addBookToLibrary(title, author, pages, bookImage, read || !notRead);
  bookDisplay();
  
  document.querySelector(".popup").reset();
}

let submit = document.body.querySelector(".formSubmit");
submit.addEventListener("click", handleSubmit);
