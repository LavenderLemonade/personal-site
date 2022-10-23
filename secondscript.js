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

const thisDiv = document.createElement('div');
thisDiv.style.border = "2px solid black";
thisDiv.style.backgroundColor = "pink";
thisDiv.classList.add("open-borders");

boxGrab.appendChild(thisDiv);
const evenSmaller = document.querySelector(".open-borders");

const tinyHead = document.createElement('h1');
tinyHead.textContent = "I'm in a div";

const littlePara = document.createElement('p');
littlePara.textContent = "ME TOO!";

evenSmaller.appendChild(tinyHead);
evenSmaller.appendChild(littlePara);



