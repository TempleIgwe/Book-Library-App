let openButton = document.body.querySelector(".openform")
openButton.addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})
// let bookDetails = document.getElementById("formSubmit", bookCard());
let submitForm = document.getElementById("formSubmit").innerHTML;
submitForm.addEventListener("click", formData()).innerHTML;

// let myLibrary = [{
//     title: 'Glory',
//     author:'Novilet Bulawayo',
//     pages:576,
//     read: false
// },{
//     title: 'Things We Never Got Over',
//     author:'Lucy Score',
//     pages:384,
//     read: false
// },{
//     title: 'Verity',
//     author:'Colleen Hoover',
//     pages:336,
//     read: false
// },{
//     title: 'Righteous Prey',
//     author:'John Sandford',
//     pages:412,
//     read: false
// }
// ];


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
function formData(){
    
    let title = document.getElementById("formTitle").value;
    let author = document.getElementById("formAuthor").value;
    let pages = document.getElementById("formAuthor").value;
    let bookImage = document.getElementById("formImage").value;
    let read = document.getElementById("formRead").value;
    
    return formData(title, author, pages, bookImage, read);

}
function bookCard(){
    document.querySelector(".books").innerHTML = submitForm;
}


// function bookDisplay(){
//     const books = document.querySelector('.books');

//     myLibrary.forEach((myLibrary) => {
//         for(const i=0; i < myLibrary.length; i++){
//             console.log(myLibrary)
//         }
//     })
// }

