let myLibrary = [];
let openButton = document.body.querySelector(".openform");
openButton.addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
}) 
 
// let submit = document.querySelector(".formSubmit");


function bookDisplay(){
    let title = document.querySelector("#formTitle");
    let author = document.querySelector("#formAuthor");
    let pages = document.querySelector("#formPages");
    let bookImage = document.querySelector("#formImage");
    let read = document.querySelector("#formRead");
    let bookCard = document.querySelector(".books");

    bookCard.innerHTML = title.value + author.value + pages.value + bookImage.value + read.value;

}


// let bookDetails = document.getElementById("formSubmit", bookCard());
// let submitForm = document.getElementById("formSubmit");
// submitForm.addEventListener("click", createElement()).innerHTML;

// function createElement(){

// }


// let books = document.createElement("h1");
// document.body.appendChild(books);
// books.style.textAlign = "center";

// let submit = formData();




function Book(title, author, pages, bookImage,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookImage = bookImage;
    this.read = read;
    
   
}

function addBookToLibrary(title, author, pages, bookImage, read){
    let book = new Book (title, author, pages,  bookImage, read);
    myLibrary.push(book);
    
}
// function formData(){
    
//     let title = document.querySelector("#formTitle").value;
//     document.getElementById("formAuthor").value;
//     document.getElementById("formImage").value;
//     document.getElementById("formRead").value;
    
    

// }
// function bookCard(){
//     document.querySelector(".books").innerHTML = submitForm;
// }
// function createElement(){
//     let card = document.formData("div")
// }


// function bookDisplay(){
//     const books = document.querySelector('.books');

//     myLibrary.forEach((myLibrary) => {
//         for(const i=0; i < myLibrary.length; i++){
//             console.log(myLibrary)
//         }
//     })
// }

