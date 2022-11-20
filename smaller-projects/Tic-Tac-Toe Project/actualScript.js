//we need a game board

const containerGrab = document.getElementById('container');

const makeBoard = (() => {
    for (i=0; i<3;i++)
    {
        let theRow = document.createElement('div');
        theRow.className = `Row`;

        for (j=0; j<3;j++)
        {
            let theSquares = document.createElement('div');
            theSquares.setAttribute('id',`${i}${j}`);
            theSquares.className = 'SquareElement';
            theRow.append(theSquares);
        }

        containerGrab.append(theRow);
    }
})();


//we need to be able to hold the player info

//we need to be able to hold the game state info