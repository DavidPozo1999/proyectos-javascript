

/* Your game is going to play against the computer, so begin with 
a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: 
use the console to make sure this is returning the expected output before moving to the next step!*/

//Creamos un array con las tres opciones.
const arrayChoices=['rock',"paper",`scissors`];



const getComputerChoice=()=>{

    //Generamos un número aleatorio entre 0 y 2
    const randomNumber=Math.floor(Math.random()*3);

    //Lo guardamos en una variable y retornamos el valor
    const computerChoice=arrayChoices[randomNumber];
    return computerChoice; 
}

const getPlayerChoice=()=>{

    let playerChoiceLowCase="";
    do{
        //Solicitamos el dato al usuario
        const playerChoice=prompt("Escribe tu elección");
        playerChoiceLowCase=playerChoice.toLowerCase();
    }while(playerChoiceLowCase!='rock' & playerChoiceLowCase!='paper' & playerChoiceLowCase!='scissors')
    return playerChoiceLowCase;
}

function playRound(computerChoice, playerChoice){
    //Recogemos el valor de cada eleccion
    const computerValue=computerChoice;
    const playerValue=playerChoice;
    const arrayWinners=['player',"computer","nobody"];
    let result="";
    switch(computerValue){
        case 'rock':
            if(playerValue=="rock"){
                console.log("Its a draw, rock same as rock");
                result=arrayWinners[2];
            }else if(playerValue=="paper"){
                console.log("You win, paper beats rock");
                result=arrayWinners[0];
            }else if(playerValue=="scissors"){
                console.log("You lose, rock beats scissors");
                result=arrayWinners[1];
            }
            break;
        case 'paper':
            if(playerValue=="rock"){
                console.log("You lose, paper beats rock");
                result=arrayWinners[1];
            }else if(playerValue=="paper"){
                console.log("Its a draw, paper same as paper");
                result=arrayWinners[2];
            }else if(playerValue=="scissors"){
                console.log("You win!, scissors beats paper");
                result=arrayWinners[0];
            }
            break;
        case 'scissors':
            if(playerValue=="rock"){
                console.log("You win!, rock beats scissors");
                result=arrayWinners[0];
            }else if(playerValue=="paper"){
                console.log("You lose, scissors beats paper");
                result=arrayWinners[1];
            }else if(playerValue=="scissors"){
                console.log("Its a draw, scissors same as scissors");
                result=arrayWinners[2];
            }
            break;
    }
    return result;
}

function game(){
    let contador=0;
    let playerCount=0;
    let computerCount=0;

    while(contador < 5){
        let resultGame=playRound(getComputerChoice(), getPlayerChoice());
        if(resultGame=="player"){
            playerCount++;
        }else if(resultGame=="computer"){
            computerCount++;
        }
        contador++;
    }
    console.log("Resultado del jugador:"+playerCount);
    console.log("Resultado del ordenador:"+computerCount);
    if(playerCount>computerCount){
        console.log("Has ganado el juego");
    }else if(playerCount < computerCount){
        console.log("Has perdido el juego");
    }else{
        console.log("Habeis empatado");
    }
}


game();