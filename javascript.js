// write function that gives randomly paper rock or scissors to the computer
let choices = ["rock" , "paper" , "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

let playerSelection;
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let score = document.getElementById("score")
score.innerHTML = `let's try to get 5 points`;



const btn = document.querySelectorAll("#buttons > button");

btn.forEach((i) => {
    i.addEventListener("click", f => {
        playerSelection = i.innerHTML;
        player.innerHTML = `You choose : ${playerSelection}`;
        return playerSelection;
    })  
})

btn.forEach((i) => {
    i.addEventListener("click", playRound)
})


btn.forEach((i) => {
    i.addEventListener("click", f => {    
    score.innerHTML = `your points : ${playerPoint}  -  computer points : ${computerPoint}`})
})

btn.forEach((i) => {
    i.addEventListener("click", f => {
        if((playerPoint > 4) ){
            score.innerHTML = `you win`
            computer.innerHTML=""
            player.innerHTML = ""
        }
        if (computerPoint > 4){
            score.innerHTML = "you lose"
            player.innerHTML = ""
            computer.innerHTML=""
        }
        })})

// function that compares player and computer choices 
var playerPoint = 0;
var computerPoint = 0;
      
function playRound(player, computerSelection) {
    computerSelection = getComputerChoice();
    computer.innerHTML = `Computer choose : ${computerSelection}`;
    player  = playerSelection
        if (player == "rock" && computerSelection == "rock") {
            console.log("It's a tie");
            
        } else if (player == "rock" && computerSelection == "paper") {
            console.log ( "You lose! paper beats rock" );
            return computerPoint = computerPoint + 1;
            
        } else if (player == "rock" && computerSelection == "scissors") {
            console.log ("You won! rock beats scissors")
            return playerPoint = playerPoint + 1;
            
        } else if (player == "paper" && computerSelection == "scissors") {
        console.log( "You lose! scissors beats paper")
        return computerPoint = computerPoint + 1;
    }
    else if (player == "paper" && computerSelection == "paper") {
    console.log( "It' a tie");
}
    else if (player == "paper" && computerSelection == "rock") {
        console.log("You won! paper beats scissors")
        return playerPoint = playerPoint + 1;
    }
    else if (player == "scissors" && computerSelection == "scissors") {
        return "It's a tie"
    }
    else if (player == "scissors" && computerSelection == "rock") {
        console.log ( "You lose! rock beats scissors");
        return computerPoint = computerPoint + 1;
    }
    else if (player == "scissors" && computerSelection == "paper") {
        console.log("You won! scissors beat paper");
        return playerPoint = playerPoint + 1;
    }     }

