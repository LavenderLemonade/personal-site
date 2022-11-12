//this one is changing the text at the tag "my-name"
document.getElementById("my-name").innerHTML = " Changed Up!";
//this on is changing the text at the tag "in-there"
document.getElementsByClassName("in-there")[0].innerHTML = "Boo!";
//this function takes in an argument, and then styles the input argument as red
function MouseOver(thing){
    thing.style.color = "red";
}
//this function takes in an argument, and then styles the input argument as black 
function MouseOut(thing){
    thing.style.color = "black";
}

//now I want to start manipulating the page directly from the DOM

const boxGrab = document.querySelector(".big-box"); //grabs the big-box class div

const thePara = document.createElement('p'); //this should make a new paragraph called thePara

thePara.textContent= "Hey, I'm red!"; //adds text to the paragraph 

thePara.style.color = 'red'; //changes the color of the text in the paragraph

boxGrab.appendChild(thePara); //this is what ultimately adds the paragraph as a child to 
                                // the big-box class element in the DOM 

const theHeader = document.createElement('h3'); //making an h3 element

theHeader.textContent = "I'm a blue H3!"; //adding the text

theHeader.style.color = 'blue'; //coloring the text

boxGrab.appendChild(theHeader);  //then adding it to the DOM 

const thisDiv = document.createElement('div'); //making another div
thisDiv.style.border = "2px solid black"; //giving the div a border and a color
thisDiv.style.backgroundColor = "pink"; //giving the div a background color
thisDiv.classList.add("open-borders"); //adding a class to the div

boxGrab.appendChild(thisDiv);//this added the div to the overall div that is in the class

const evenSmaller = document.querySelector(".open-borders"); //this is a selector for the div we just made

const tinyHead = document.createElement('h1'); //this makes an h1 element
tinyHead.textContent = "I'm in a div"; //this one makes some text content for the h1 element

const littlePara = document.createElement('p'); //this one makes a paragraph element
littlePara.textContent = "ME TOO!"; //this one adds text content to the paragraph element

evenSmaller.appendChild(tinyHead); //now we add the h1 element to the div we made earlier
evenSmaller.appendChild(littlePara); //and now we add the paragraph element to the div we made earlier'

//alright, now let's start letning how to work with like, events and stuff 

const btn = document.querySelector('#btn'); //we grabbing that btn id 
btn.addEventListener('click', () => { alert("Hello World!")}); //so,when the button is clicked, we do the alert

btn.addEventListener('click', function(e) { console.log(e.target)}); //what this does is that it gives you info on the target of the event

function Book(title, pages, isRead)
{
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

const Downfall = new Book('Downfall', '300', true);

console.log(Downfall.title);
console.log(Downfall.pages);
console.log(Downfall.isRead);

function Manga(title, author){
    this.title = title;
    this.mangaka = author;
}

Manga.prototype.whoWroteThis = function(){ console.log(this.mangaka)};

const Solanin = new Manga('Solanin', 'Inio Asano');
Solanin.whoWroteThis();

