let thisLib = [];
let counter = 0;
const makeOne = document.createElement('div');

function Book(title, author)
{
    this.title = title;
    this.author = author;
}

function addToLibrary()
{
    let bookName = prompt('What is the name of the book?');
    let bookAuthor = prompt('Who wrote the book?');

    theBook = new Book(bookName,bookAuthor);

    thisLib.push(theBook);
}

let num = prompt('How many books do you want to add?');

for(i = 0; i < num; i++)
{
    addToLibrary();
    counter +=1;
}

console.log(thisLib);

const takeContainer = document.querySelector(".container"); //grabbing the container div

for(i = 0; i < num; i++)
{
    
    makeOne.className = thisLib[i].title;
    makeOne.textContent = 'Book Title: ' + thisLib[i].title + ' ' + 'Book Author: ' + thisLib[i].author;
    takeContainer.append(makeOne);
}

const bigButton = document.querySelector(".btn");
bigButton.addEventListener('click', event => { 
    addToLibrary();
    makeOne.className = thisLib[counter].title;
    makeOne.textContent = 'Book Title: ' + thisLib[counter].title + ' ' + 'Book Author: ' + thisLib[counter].author;
    takeContainer.append(makeOne);
    counter+=1;

});