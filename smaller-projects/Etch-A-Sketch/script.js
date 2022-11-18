const theContainer = document.getElementById('container');
const aboveContainer = document.getElementById('up-here');

function makeGrid(num)
{
    askButton.remove();
    console.log(num);
    console.log(typeof(num));
    for (i = 0; i < num; i++)
    {
        console.log('in here');
        let firstInRow = document.createElement('div');
        firstInRow.className = `RowHolder`;

        for (j = 0; j < num; j++)
        {
            let rowElement = document.createElement('div');
            rowElement.setAttribute('id', `${i}${j}`);
            rowElement.className = 'RowElement';
            firstInRow.append(rowElement);
        }

        theContainer.append(firstInRow);
    }

    const allSquares = document.querySelectorAll('.RowElement');

    allSquares.forEach((item) => {
        item.addEventListener('mouseover', (event) =>
        item.classList.add('changed'));
    });
}



const askButton = document.createElement('button');
askButton.textContent = 'How Many Squares?';
askButton.addEventListener('click', event => makeGrid(Number(prompt('How many squares?'))));
aboveContainer.append(askButton);