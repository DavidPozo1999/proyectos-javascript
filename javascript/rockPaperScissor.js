

/* Your game is going to play against the computer, so begin with 
a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: 
use the console to make sure this is returning the expected output before moving to the next step!*/


const getComputerChoice=()=>{
    //Creamos un array con las tres opciones.
    const arrayChoices=['Rock',"Paper",`Scissors`];

    //Generamos un número aleatorio entre 0 y 2
    const randomNumber=Math.floor(Math.random()*3);

    //Lo guardamos en una variable y retornamos el valor
    const computerChoice=arrayChoices[randomNumber];
    return computerChoice; 
}

console.log(getComputerChoice());