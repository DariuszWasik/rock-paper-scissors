// write function that gives randomly paper rock or scissors to the computer
let choices = ["rock" , "paper" , "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
// function that compares player and computer choices 
let playerPoint = 0;
let computerPoint = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection =  prompt("rock, paper or scissors?", "");
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        console.log("It's a tie");

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log ( "You lose! paper beats rock" );
        return computerPoint = computerPoint + 1;
        
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log ("You won! rock beats scissors")
        return playerPoint = playerPoint + 1;
        
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log( "You lose! scissors beats paper")
        return computerPoint = computerPoint + 1;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        console.log( "It' a tie");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("You won! paper beats scissors")
        return playerPoint = playerPoint + 1;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "It's a tie"
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log ( "You lose! rock beats scissors");
        return computerPoint = computerPoint + 1;
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log("You won! scissors beat paper");
        return playerPoint = playerPoint + 1;
    } else {
        console.log("Something's wrong, chose one more time!");
        playRound();
    }
}

// function that allows play n round

function playGame() {

    let n = prompt("how many games", 3);
    for (let i = 1; i <= n; i++) {
        playRound();
    }


    // info about the game result

    console.log(`computer ${computerPoint} : player ${playerPoint} `);
    
    if (playerPoint > computerPoint) {
        console.log('YOU WON CONGRATS');
    } else { console.log("Not this time. Try again!"); }
}

    playGame();


// console.log(playerPoint);
// console.log(computerPoint) 

