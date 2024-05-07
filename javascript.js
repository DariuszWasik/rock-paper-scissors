// write function that gives randomly paper rock or scissors to the computer
let choices = ["rock" , "paper" , "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
let playerSelection = ""


//create buttons that allows player to choose his item
const buttons = document.querySelectorAll("#buttons");
console.log(buttons);
const btn = document.querySelectorAll("#buttons > button");

btn.forEach((i) => {
    i.addEventListener("click", f => {
        playerSelection = i.innerHTML;
        console.log("player:", playerSelection);
        return playerSelection
    })
    i.addEventListener("click", playRound)

})




// function that compares player and computer choices 
let playerPoint = 0;
let computerPoint = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playerSelection, "z funkcji")
    if (playerSelection = "rock" && computerSelection == "rock") {
        console.log("It's a tie");

    } else if (playerSelection = "rock" && computerSelection == "paper") {
        console.log ( "You lose! paper beats rock" );
        return computerPoint = computerPoint + 1;
        
    } else if (playerSelection = "rock" && computerSelection == "scissors") {
        console.log ("You won! rock beats scissors")
        return playerPoint = playerPoint + 1;
        
    } else if (playerSelection = "paper" && computerSelection == "scissors") {
        console.log( "You lose! scissors beats paper")
        return computerPoint = computerPoint + 1;
    }
    else if (playerSelection = "paper" && computerSelection == "paper") {
        console.log( "It' a tie");
    }
    else if (playerSelection = "paper" && computerSelection == "rock") {
        console.log("You won! paper beats scissors")
        return playerPoint = playerPoint + 1;
    }
    else if (playerSelection = "scissors" && computerSelection == "scissors") {
        return "It's a tie"
    }
    else if (playerSelection = "scissors" && computerSelection == "rock") {
        console.log ( "You lose! rock beats scissors");
        return computerPoint = computerPoint + 1;
    }
    else if (playerSelection = "scissors" && computerSelection == "paper") {
        console.log("You won! scissors beat paper");
        return playerPoint = playerPoint + 1;
    } else {
        console.log("Something's wrong, chose one more time!");
        ;
    }
}

// // function that allows play n round

// function playGame() {

//     let n = prompt("how many games", 3);
//     for (let i = 1; i <= n; i++) {
//         playRound();
//     }
 

//     // info about the game result

//     console.log(`computer ${computerPoint} : player ${playerPoint} `);
    
//     if (playerPoint > computerPoint) {
//         console.log('YOU WON CONGRATS');
//     } else { console.log("Not this time. Try again!"); }
// }

//     playGame();


// // console.log(playerPoint);
// // console.log(computerPoint) 

