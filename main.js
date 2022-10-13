let myLibrary = [];
let openButton = document.body.querySelector(".openform");
openButton.addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
}) 

function Book(title, author, pages, bookImage,isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookImage = bookImage;
    this.isRead = isRead;
}


function bookDisplay(){
   myLibrary.forEach(book => {

       let bookCard = document.body.querySelector(".books");
       let bookElement = `
       <h1>${book.title}</h1>
       <h3>${book.author}</h3>
       <h3>${book.pages}</h3>
       <img src = ${book.image}/>
       <h3>${book.isRead}</h3>

       `
       bookCard.innerHTML += bookElement
    //    bookCard.append()
       
    })
}

function addBookToLibrary(title, author, pages, bookImage, isRead){
    let book = new Book(title, author, pages,  bookImage, isRead);
    myLibrary.push(book);
}

function handleSubmit(e){
    e.preventDefault()
    let title = document.querySelector("#formTitle").value;
    let author = document.querySelector("#formAuthor").value;
    let pages = document.querySelector("#formPages").value;
    let bookImage = document.querySelector("#formImage").value;
    let read = document.querySelector("#form-Read").value;
    let notRead = document.querySelector("#form-NotRead").value;
    addBookToLibrary(title, author, pages, bookImage, read || !notRead);
    bookDisplay()
}
 
let submit = document.body.querySelector(".formSubmit");
submit.addEventListener("click", handleSubmit);




