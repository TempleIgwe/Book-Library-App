let myLibrary = [{
    title: 'Glory',
    author:'Novilet Bulawayo',
    pages:576,
    read: 'false'
},{
    title: 'Things We Never Got Over',
    author:'Lucy Score',
    pages:384,
    read: 'false'
},{
    title: 'Verity',
    author:'Colleen Hoover',
    pages:336,
    read: 'false'
},{
    title: 'Righteous Prey',
    author:'John Sandford',
    pages:412,
    read: 'false'
}
];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book (title, author, pages, read);
    myLibrary.push(book);

}


function bookDisplay(){
    const books = document.querySelector('.books');

    myLibrary.forEach((myLibrary) => {

    })
}