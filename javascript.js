// write function that gives randomly paper rock or scissors to the computer
let choices = ["rock" , "paper" , "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
let computerSelection = getComputerChoice();
console.log(computerSelection)
// prompt window that allows player to chose paper rock or scissors 
let playerSelection = prompt("rock, paper or scissors?", "")
console.log(playerSelection);
// function that compares player and computer choices 
// function that allows play 5 round
// info about the game result