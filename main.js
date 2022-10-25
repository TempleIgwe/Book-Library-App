/* eslint-disable*/
<<<<<<< HEAD
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
=======

// declare an empty aray
const myLibrary = [];
// const openButton = document.body.querySelector('.openform');
// openButton.addEventListener('click', function(){
//     document.querySelector(".popup").style.display = "flex";
// })
const newBook = document.querySelector("#new-book");
newBook.addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});

// Object Constructor
function Book(title, author, pages, bookImage,isRead) {
>>>>>>> e95a4087d4f397d34fec19be4bab8f418e73ce7b
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookImage = bookImage;
  this.isRead = isRead;
}
<<<<<<< HEAD
function bookDisplay(bookToAdd) {
  
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
    let readStatusBtn = document.querySelector(".read-status");
    let removeBook = document.querySelector("remove-book");
    
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
=======
// function for adding a new book to the array/library
function addBookToLibrary(title, author, pages, bookImage, isRead){
    let book = new Book(title, author, pages,  bookImage, isRead);
    myLibrary.push(book);
    bookDisplay();
}
// Function to display library array to cards
function bookDisplay(){
    const books = document.querySelector(".books");
    // Remove previously displayed DOM cards before i loop over array again
    const removeDiv = document.querySelectorAll(".card");
    for (let i = 0; i < removeDiv.length; i++){
        removeDiv[i].remove();
    }
    // Loop over the library array and display to the cards
    let index = 0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        // Create remove book buttom and add class attribute for each array card
        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.textContent = "Remove From Library";

        // link the data attribute of the remove button to the array and card
        removeButton.dataset.linkedArray = index;
        card.appendChild(removeButton);

        // Startevent listener/remove array item from array and card from parent div via data link
        removeButton.addEventListener("click", removeBook);

        function removeBook(){
            let bookRetrieve = removeButton.dataset.linkedArray;
            myLibrary.splice(parseInt(bookRetrieve), 1);
            card.remove();
            bookDisplay();
        }

        // Create read status button and add class attribute for each array card
        const readStatus = document.createElement("button");
        readStatus.classList.add('read-status');
        readStatus.textContent = "Toggle Read Status";

        // Link the data attribute of the toggle read button to the array and card
        readStatus.dataset.linkedArray = index;
        card.appendChild(readStatus);

        // Create event listener/toggle logic for aray objects prototype for read status change
        readStatus.addEventListener("click", toggleReadStatus);

        function toggleReadStatus(){
            let toggleBookRetrieve = readStatus.dataset.linkedArray;
            Book.prototype = object.create (Book.prototype);
            const toggleBook = new Book();

            // Run to see what read value is available to toggle from
            if ((myLibrary[parseInt(toggleBookRetrieve)].Read) == "Read") {
                toggleBook.Read  = "Not Read";
                myLibrary[parseInt(toggleBookRetrieve)].Read = toggleBook.Read;
            }else if ((myLibrary[parseInt(toggleBookRetrieve)].Read) == "not-read") {
                toggleBook.Read = "Read";
                 myLibrary[parseInt(toggleBookRetrieve)].Read = toggleBook.Read;
            }
            bookDisplay();
        }
        // Loop over the object keys and values and display to each card
        for (let key in myLibrarys){
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrarys[key]}`);
            card.appendChild(para);
        }

    index++;    

       
    })

    
}

// Start event listener/add input to array for new entry form
const submit = document.querySelector(".formSubmit");
submit.addEventListener("click", formData);

// Transform form data to variables for intake
function formData(){
    let title = document.querySelector("#formTitle").value;
    let author = document.querySelector("#formAuthor").value;
    let pages = document.querySelector("#formPages").value;
    let image = document.querySelector("#formImage").url;
    let read = document.querySelector("#Read").value;

    // Breakout if form is incomplete or not valid
    if ((title == "") || (author == "") || (pages == "") || (read == "")){
        return;
    }
    // Call funtion to input the book data to array
    addBookToLibrary(title, author. pages, bookImage, read);

    // Reset the form after submitting sucessfully
    document. querySelector(".popup").reset();
    

}
// Start event listener for clear button
const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);
function clearForm(){
    document.querySelector("popup").reset();
}




// const myLibrary = [];
// const openButton = document.body.querySelector('.openform');
// openButton.addEventListener('click', function(){
//     document.querySelector(".popup").style.display = "flex";
// })

// function Book(title, author, pages, bookImage,isRead) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.bookImage = bookImage;
//   this.isRead = isRead;
// }


// function bookDisplay(){
//     const removeDiv = document.querySelectorAll(".card");
//     for (let i = 0; i < removeDiv.length; i++){
//         removeDiv[i].remove();
//     }
//    myLibrary.forEach(book => {

//        let bookCard = document.body.querySelector(".books");
//        bookCard.style.backgroundColor = "green";
//        bookCard.style.color = "gold";
//        bookCard.style.border = "1px solid red";
//        bookCard.style.borderRadius = "5px";
//        bookCard.style.width = "20vw";
//        bookCard.style.textAlign = "center";
       
      
//        let bookElement = `
//        <h1>${book.title}</h1>
//        <h3>${book.author}</h3>
//        <h3>${book.pages}</h3>
//        <img src = ${book.image}/>
//        <h3>${book.isRead}</h3>
//        `
//        bookCard.innerHTML += bookElement  

    
    
    
       
//     })
// }

// function addBookToLibrary(title, author, pages, bookImage, isRead){
//     let book = new Book(title, author, pages,  bookImage, isRead);
//     myLibrary.push(book);
// }

// function handleSubmit(e){
//     e.preventDefault()
//     let title = document.querySelector("#formTitle").value;
//     let author = document.querySelector("#formAuthor").value;
//     let pages = document.querySelector("#formPages").value;
//     let bookImage = document.querySelector("#formImage").value;
//     let read = document.querySelector("#form-Read").value;
//     let notRead = document.querySelector("#form-NotRead").value;

//     addBookToLibrary(title, author, pages, bookImage, read || !notRead);
//     bookDisplay()

//     document.querySelector(".popup").reset();
    
// }
 
// let submit = document.body.querySelector(".formSubmit");
// submit.addEventListener("click", handleSubmit);




>>>>>>> e95a4087d4f397d34fec19be4bab8f418e73ce7b
