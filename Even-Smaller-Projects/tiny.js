let myLibrary = []; //this is the array that's gonna hold the book objects we make 
let checkGrab = document.querySelector("#container");

function Book(title,author) //this is the Book class that we use in order to make Book objects
{
    this.title = title;
    this.author = author;
}

function displayTheLibrary()
{
    const newDiv = document.createElement('div'); //this creates a new div element that we will add to the container div
    newDiv.className = myLibrary[myLibrary.length-1].title; //this adds a class to the new div that is the same as the title of the current book
    newDiv.textContent='Book Title: '+ myLibrary[myLibrary.length-1].title + ' Book Author: ' + myLibrary[myLibrary.length-1].author; //this adds text to the div
    checkGrab.append(newDiv); //this finally adds the new div to the container div 
}

function addToLibrary()
{
    const bookTitle = prompt("What's the title of the Book?"); //give the book a title
    const bookAuthor = prompt("Who's the author of the book?"); //give the book an author
    //let's check if the book already exists
    for(i = 0;i < myLibrary.length; i++)
    {
        if (myLibrary[i].title == bookTitle )
        {
            console.log("This book already exists.")
            return;
        }
    }
    newBook = new Book(bookTitle,bookAuthor);
    myLibrary.push(newBook);
    displayTheLibrary();
    
}

const pressButton = document.querySelector(".btn");
pressButton.addEventListener('click',event=> {addToLibrary()});