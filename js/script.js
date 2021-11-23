// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Quando l' utente clicca play se il valore della option è easy creo numeri casuali da 1 a 100 e lo stile del generatedcell è 10% width
// medium 1 a 81 e 100% / 8 width
// hard 1 a 49 e 100% / 7 width



// ---------
// FUNCTIONS 
// ---------

// Genera un div con all' interno uno span il cui numero e uguale a quello dell' array 
function createCell() {
    
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

