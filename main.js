let myLibrary = [];
let openButton = document.body.querySelector(".openform");
openButton.addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
}) 

function Book(title, author, pages, bookImage,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookImage = bookImage;
    this.read;
}


function bookDisplay(){
   myLibrary.forEach(book => {

       let bookCard = document.body.querySelector(".books");
       let bookElement = `<li>
       <h1>${book.title}</h1>
       <h1>${book.author}</h1>
       <h1>${book.pages}</h1>
   
       </li>`
       bookCard.innerHTML += bookElement
    //    bookCard.append()
       
    })
}

function addBookToLibrary(title, author, pages, bookImage, read){
    let book = new Book(title, author, pages,  bookImage, read);
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




