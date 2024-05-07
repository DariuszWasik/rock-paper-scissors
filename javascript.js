// write function that gives randomly paper rock or scissors to the computer
let choices = ["rock" , "paper" , "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}
let playerSelection;


//create buttons that allows player to choose his item
const buttons = document.querySelectorAll("#buttons");
console.log(buttons);
const btn = document.querySelectorAll("#buttons > button");
console.log("btn", btn)
btn.forEach((i) => {
    i.addEventListener("click", f => {
        playerSelection = i.innerHTML;
        console.log("player:", playerSelection);
        return playerSelection;})  
    })

    btn.forEach((i) => {
    i.addEventListener("click", playRound)
    })
    
    btn.forEach((i) => {
    i.addEventListener("click", compareResults)
    })
    
    
    
    // function that compares player and computer choices 
    var playerPoint = 0;
    var computerPoint = 0;
    
    function playRound(player, computerSelection) {
        computerSelection = getComputerChoice();
        console.log("comp", computerSelection);
        player  = playerSelection
        console.log("player", player)
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
    } else {
        console.log("Something's wrong, chose one more time!");
        ;
    }
}

function compareResults (a,b) {
     a = playerPoint;
     b = computerPoint;
    if (a>4 && a>b){
        console.log("YOU WIN!"); 

        i.removeEventListener("click", f => {
            playerSelection = i.innerHTML;
            console.log("player:", playerSelection);
            return playerSelection;})  
        
    
        btn.forEach((i) => {
        i.removeEventListener("click", playRound)
        })
        
        btn.forEach((i) => {
        i.removeEventListener("click", compareResults)
        })

    }
    if (b>4){
        console.log("YOU LOSE!");
        btn.forEach((i) => {
            i.removeEventListener("click", f => {
                playerSelection = i.innerHTML;
                console.log("player:", playerSelection);
                return playerSelection;})  
            })
        
            btn.forEach((i) => {
            i.removeEventListener("click", playRound)
            })
            
            btn.forEach((i) => {
            i.removeEventListener("click", compareResults)
            })
        
    }
}


// // console.log(playerPoint);
// // console.log(computerPoint) 

