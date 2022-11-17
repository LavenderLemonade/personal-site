// this grabs the container in the HTML file
const main = document.getElementById('container');

//let's make some header and footer divs to hold info like the title and stuff
//this one is for the header
const headerDiv = document.createElement('div');
headerDiv.classList.add('header');
headerDiv.textContent = 'Rock, Paper, Scissors!'
//this is for the footer
const footerDiv = document.createElement('div');
footerDiv.classList.add('footer');

//now I want to make the divs that will hold the button and the results

const playerBtn = document.createElement('button'); //button for the player
const playerDiv = document.createElement('div'); //div for the player stuff
playerDiv.classList.add('player');
playerBtn.textContent = 'Click Me Player';

const newImage = document.createElement('img');

const computerDiv = document.createElement('div'); //div for the computer stuff
computerDiv.classList.add('computer');

//I also now need a middle div that will be a flex container to hold everything else
const midDiv = document.createElement('div');
midDiv.setAttribute('id', 'middle');

//now we need to add these things to the main div 

//first we have to add the button to the div 
playerDiv.appendChild(newImage);
footerDiv.append(playerBtn);
//now I need to add divs to the middle div
midDiv.append(playerDiv);
midDiv.append(computerDiv);
//now we add them to the main div
main.append(headerDiv);
main.append(midDiv);
main.append(footerDiv);

//so, let's make the function that will run when the player clicks the button 
//the player should be able to choose from rock paper or scissors 

let playerCounter = 0;
let computerCounter = 0;

function compChoice()
{
    if (computerDiv.firstChild != null)
    {
        computerDiv.removeChild(computerDiv.firstChild);
    }

    const choices = ['Rock', 'Paper', 'Scissors'];
    let theChoice = choices[Math.floor(Math.random() * choices.length)];

    if (theChoice == 'Rock')
    {
        const choiceImage = document.createElement('img');
        choiceImage.src = "Images/rock.png";
        choiceImage.classList.add(`${theChoice}`);
        computerDiv.appendChild(choiceImage);
        return theChoice;
    }

    if (theChoice == 'Paper')
    {
        const choiceImage = document.createElement('img');
        choiceImage.src = "Images/paper.png";
        choiceImage.classList.add(`${theChoice}`);
        computerDiv.appendChild(choiceImage);
        return theChoice;
    }

    if (theChoice == 'Scissors')
    {
        const choiceImage = document.createElement('img');
        choiceImage.src = "Images/scissors.png";
        choiceImage.classList.add(`${theChoice}`);
        computerDiv.appendChild(choiceImage);
        return theChoice;
    }
    return theChoice;
}

function displayPlayer(choice)
{
    newImage.src = `Images/${choice}.png`;
    newImage.classList.add(`${choice}`);
}

function makeChoice() 
{
    const ask = prompt('You gonna go Rock, Paper, or Scissors?'); //asking them
    let opponentChoice = compChoice()
    if (ask == 'Rock')
    {
        displayPlayer(ask);   
        if (ask == opponentChoice)
        {
            console.log('Draw!');
        }

        if (opponentChoice == 'Paper')
        {
            console.log('You lose!');
            computerCounter++;
        }

        if (opponentChoice == 'Scissors')
        {
            console.log('You win!');
            playerCounter++;
        }

       
    }

    if (ask == 'Paper')
    {
        displayPlayer(ask);  
        if (ask == opponentChoice)
        {
            console.log('Draw!');
        }

        if (opponentChoice == 'Scissors')
        {
            console.log('You lose!');
            computerCounter++;
        }

        if (opponentChoice == 'Rock')
        {
            console.log('You win!');
            playerCounter++;
        }

        
    }

    if (ask == 'Scissors')
    {
        displayPlayer(ask);  
        if (ask == opponentChoice)
        {
            console.log('Draw!');
        }

        if (opponentChoice == 'Rock')
        {
            console.log('You lose!');
            computerCounter++;
        }

        if (opponentChoice == 'Paper')
        {
            console.log('You win!');
            playerCounter++;
        }

        
    }

    headerDiv.textContent = `Player: ${playerCounter}  Computer: ${computerCounter}`;
}

playerBtn.addEventListener('click', event => makeChoice());
