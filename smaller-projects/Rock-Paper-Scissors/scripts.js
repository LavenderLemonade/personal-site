// this grabs the container in the HTML file
const main = document.getElementById('container');

//now I want to make the divs that will hold the button and the results

const playerBtn = document.createElement('button'); //button for the player
const playerDiv = document.createElement('div'); //div for the player stuff
playerDiv.classList.add('player');
playerBtn.textContent = 'Click Me Player';

const newImage = document.createElement('img');

const computerDiv = document.createElement('div'); //div for the computer stuff
computerDiv.classList.add('computer');
computerDiv.textContent = "PC Choice goes here!";


//now we need to add these things to the main div 

//first we have to add the button to the div 

playerDiv.appendChild(newImage);
playerDiv.append(playerBtn);
//now we add them to the main div
main.append(playerDiv);
main.append(computerDiv);

//so, let's make the function that will run when the player clicks the button 
//the player should be able to choose from rock paper or scissors 

function compChoice()
{
    const choices = ['Rock', 'Paper', 'Scissors'];
    let theChoice = choices[Math.floor(Math.random() * choices.length)];
    computerDiv.textContent = theChoice;

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
        }

        if (opponentChoice == 'Scissors')
        {
            console.log('You win!');
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
        }

        if (opponentChoice == 'Rock')
        {
            console.log('You win!');
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
        }

        if (opponentChoice == 'Paper')
        {
            console.log('You win!');
        }
    }
}

playerBtn.addEventListener('click', event => makeChoice());
