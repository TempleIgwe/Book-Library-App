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

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
function bookDisplay() {
  
  const book = myLibrary.at(-1);
  let bookElement = `
       <div class = "book-card">
          <h1>${book.title}</h1>
          <h3>${book.author}</h3>
          <h3>${book.pages}</h3>
          <h3>${book.isRead}</h3>
          <button class ="read-status">Read Status</button>
          <button class ="remove-book">Remove Book</button>
       </div>
       `;
        bookCard.innerHTML += bookElement;
    let readStatusBtn = document.querySelector("read-status");

    let removeBtn = document.querySelector("remove-book");
    
     removeBtn.addEventListener("click", () => {
       book.remove();
       bookDisplay();
     });
    readStatusBtn.setAttribute("data-index", myLibrary.indexOf(bookDisplay));

    bookCard.setAttribute("data-index", myLibrary.indexOf(bookDisplay));

   
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

function addBookToLibrary(title, author, pages, isRead) {
  let book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

function handleSubmit(e) {
  e.preventDefault();
  let title = document.querySelector("#formTitle").value;
  let author = document.querySelector("#formAuthor").value;
  let pages = document.querySelector("#formPages").value;
  let read = document.querySelector("#form-Read").value;
  let notRead = document.querySelector("#form-NotRead").value;

  addBookToLibrary(title, author, pages, read || !notRead);
  bookDisplay();
  
  document.querySelector(".popup").reset();
}

let submit = document.body.querySelector(".formSubmit");
submit.addEventListener("click", handleSubmit);
