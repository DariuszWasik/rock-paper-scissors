// write function that gives randomly paper rock or scissors to the computer
let choices = ["rock" , "paper" , "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
let computerChoice = getComputerChoice();
console.log(computerChoice)
// prompt window that allows player to chose paper rock or scissors 

// function that compares player and computer choices 
// function that allows play 5 round
// info about the game result