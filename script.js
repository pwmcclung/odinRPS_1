

function getComputerChoice(){
    let compC =  Math.random()
    if (compC <= 0.33){
        return 'Rock'
    }else if (compC < 0.66){
        return 'Paper'      
    } else{
        return 'Scissors'    
    }
}


function playRound(playerSelection, comp){
    if(playerSelection === comp){
        return 'NO WINNERS.'
    }else if(playerSelection == 'rock' && comp == 'Scissors'){
        return  'You Win!!' 
    } else if (playerSelection == 'paper' && comp == 'Rock'){
        return 'You Win!!' 
    } else if (playerSelection == 'scissors' && comp == 'Paper'){
        return  'You Win!!' 
    } else if (playerSelection == 'scissors' && comp == 'Rock'){
        return  'You Lose!!!'
    } else if  (playerSelection == 'rock' && comp == 'Paper'){
        return  'You Lose!!!'
    } else if (playerSelection == 'paper' && comp == 'Scissors'){
        return 'You Lose!!!'
    }
   }

function game(){
    for (let i = 0; i < 5; i++){
        return playRound(playerSelection, comp)
    }
}

let playerSelection = prompt('Please enter Rock, Paper, or Scissors: ')
playerSelection.toLowerCase()
let comp = getComputerChoice()
console.log(game())
//console.log(playRound(playerSelection, comp))