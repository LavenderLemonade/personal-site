let myLibrary = []; //this is the array that's gonna hold the book objects we make 
let checkGrab = document.querySelector("#container");

function Book(title,author) //this is the Book class that we use in order to make Book objects
{
    this.title = title;
    this.author = author;
}

function displayTheLibrary()
{
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = "removalButton";
    //So, we're going to make a span element that we can affect with CSS
    const titleSpan = document.createElement('span');
    titleSpan.className = "getBold";
    titleSpan.textContent = 'Book Title: ';
    //Another span element, purely so we can make the text on these bold
    const authorSpan = document.createElement('span');
    authorSpan.className = "getBold";
    authorSpan.textContent = 'Book Author: ';
    // Now we can start making the div that'll hold everything
    const newDiv = document.createElement('div'); //this creates a new div element that we will add to the container div
    newDiv.className = myLibrary[myLibrary.length-1].title; //this adds a class to the new div that is the same as the title of the current book
    //the order in which we add things to the div matters 
    newDiv.append(titleSpan);
    newDiv.innerHTML += myLibrary[myLibrary.length-1].title + ' ';
    newDiv.append(authorSpan);
    newDiv.innerHTML += myLibrary[myLibrary.length-1].author + ' ';
    newDiv.append(deleteButton);
    //now that everything has been added, we can add out fully-assembled div to the container 
    checkGrab.append(newDiv); //this finally adds the new div to the container div 
    makeAnEventListener();
}

function deleteFromLibrary()
{
    let bookName = event.target.parentElement.className;
    let index = myLibrary.map(object => object.title).indexOf(bookName);
    console.log(index);

    console.log(event.target.parentElement.className)
    event.target.parentElement.remove();

  
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
            alert("This book already exists.")
            return;
        }
    }
    newBook = new Book(bookTitle,bookAuthor);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayTheLibrary();
    
}

function makeAnEventListener()
{
    const hitButton = checkGrab.querySelectorAll(".removalButton");
    hitButton.forEach(item => { item.addEventListener('click', event => {deleteFromLibrary()})});
}

const pressButton = document.querySelector(".btn");
pressButton.addEventListener('click',event=> {addToLibrary()});