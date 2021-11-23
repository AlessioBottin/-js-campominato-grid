// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Quando l' utente cliccca play parte il gioco
const playBtn = document.getElementById('play-btn');
playBtn.addEventListener('click', gameStart);

function gameStart() {
    // Raccolgo il dato sull' impostazione della difficolta 
    const gameDifficulty = document.getElementById('difficulty').value;
    let generatedCellsNumber;

    // Resetto le celle precedenti 
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    
    // Cambio il numero di celle in base alla difficoltà 
    switch (gameDifficulty) {
        case 'easy':
            generatedCellsNumber = 100;
            break;
        case 'medium':
            generatedCellsNumber = 81;
            break;
        case 'hard':
            generatedCellsNumber = 49;
            break; 
        default:
    }

    // Genero l' array di numeri casuali e diversi 
    const rndNumbersArray = getRndNumbersArray(generatedCellsNumber);

    // Per ogni numero genero una cella e la appendo al div che la contiene
    for ( i = 0; i < rndNumbersArray.length; i++ ) {
        thisNumber = rndNumbersArray[i];

        // Genero cella 
        const createdCell = createCell(thisNumber);

        // Ne modifico le dimensioni in base alle celle 
        if (generatedCellsNumber = 100) {
            createdCell.style.width = "calc( 100% / 10 )";
            createdCell.style.height = "calc( 100% / 10 )";
        } else if ( generatedCellsNumber = 81 ) {
            createdCell.style.width = "calc( 100% / 8 )";
            createdCell.style.height = "calc( 100% / 8 )";   
        } else if ( generatedCellsNumber = 49 ) {
            createdCell.style.width = "calc( 100% / 7 )";
            createdCell.style.height = "calc( 100% / 7 )";   
        }

        // Appendo cella 
        grid.appendChild(createdCell);
    }
}




// ---------
// DOM FUNCTIONS 
// ---------



// ---------
// FUNCTIONS 
// ---------

// Genera un div con all' interno uno span e un numero
// number --> numero che voglio dare allo span 
function createCell(number) {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    // newCell.style.width = 
    newCell.innerHTML = 
    `
    <span>${number}</span>
    `;

    return newCell;
}

// Genera un array di numeri in posizione casuale e mai doppi da 1 a numbersQuantity inclusi 
// numbersQuantity --> quantità di numeri che vogliamo 
function getRndNumbersArray(numbersQuantity) {
    const numbersArray = [];   

    while ( numbersArray.length < numbersQuantity ) {
        const rndNumber = getRndInteger(1, numbersQuantity);

        if ( !numbersArray.includes(rndNumber) ) {
            numbersArray.push(rndNumber);
        }
    }

    return numbersArray;
}

// Genera un numero da min a max inclusi 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

