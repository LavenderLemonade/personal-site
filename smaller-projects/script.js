let word = 'hello'
console.log(word[2])
function getComputerChoice()
{
    let theChoices = ['Rock', 'Paper', 'Scissors']
    let randomChoice = theChoices[Math.floor(Math.random()*theChoices.length)]
    return randomChoice
}



function playRound(playerSelect, computerSelect)
{
    if (playerSelect.toUpperCase() === 'ROCK' && computerSelect === 'Rock')
    {
        return 'Draw! Try again!';
    }

    else if (playerSelect.toUpperCase() === 'ROCK' && computerSelect === 'Paper')
    {
        return 'You lose!';
    }

    else if (playerSelect.toUpperCase() === 'ROCK' && computerSelect === 'Scissors')
    {
        return 'You win!!';
    }

    else if (playerSelect.toUpperCase() === 'PAPER' && computerSelect === 'Rock')
    {
        return 'You lose!';
    }

    else if (playerSelect.toUpperCase() === 'PAPER' && computerSelect === 'Paper')
    {
        return 'Draw! Try Again!';
    }

    else if (playerSelect.toUpperCase() === 'PAPER' && computerSelect === 'Scissors')
    {
        return 'You lose!';
    }

    else if (playerSelect.toUpperCase() === 'SCISSORS' && computerSelect === 'Scissors')
    {
        return 'Draw! Try Again!';
    }

    else if (playerSelect.toUpperCase() === 'SCISSORS' && computerSelect === 'Paper')
    {
        return 'You win!';
    }

    else if (playerSelect.toUpperCase() === 'SCISSORS' && computerSelect === 'Rock')
    {
        return 'You lose!';
    }
}

const playerChoice = 'Scissors';
const pcChoice = getComputerChoice();

function game()
{
    let wins = 0;
    let losses = 0;

    for (i = 0; i < 5; i++)
    {
        let decision = playRound(playerChoice,getComputerChoice())
        if (decision.toUpperCase().includes("WIN"))
        {
            wins++;
            console.log('Wins: ' + wins)
        }
        else if (decision.toUpperCase().includes("LOSE"))
        {
            losses++;
            console.log('Losses: ' + losses)
        }
        else if (decision.toUpperCase().includes("DRAW"))
        {
            console.log('Draw! No contest!')
        }

    }
    console.log('Wins: ' + wins)
    console.log('Losses: ' + losses)
    if (wins > losses)
    {
        console.log('You win!')
    }
    else if (wins < losses)
    {
        console.log('You lose!')
    }
    else{
        console.log('Draw!')
    }
}

console.log(playerChoice.toUpperCase())
console.log(pcChoice)
game();