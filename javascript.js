// write function that gives randomly paper rock or scissors to the computer
let choices = ["rock" , "paper" , "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
// getComputerChoice();
// console.log(getComputerChoice())
// prompt window that allows player to chose paper rock or scissors 
// let playerSelection = prompt("rock, paper or scissors?", "")
// console.log(playerSelection);
// function that compares player and computer choices 
function playRound(playerSelection, computerSelection) {
    playerSelection =  prompt("rock, paper or scissors?", "");
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "It's a tie"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! paper beats rock"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You won! rock beats scissors"
    
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats paper"
    }
     else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "It' a tie"
    }
     else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You won! paper beats scissors"
    }
     else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "It's a tie"
    }
     else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! rock beats scissors"
    }
     else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You won! scissors beat paper"
    } else {
        return "Something's wrong"
    }
}

console.log (playRound())
// function that allows play 5 round
// info about the game result