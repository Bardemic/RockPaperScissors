const rpsList = ["rock", "paper", "scissors"];

let getComputerChoice = () => rpsList[Math.floor(Math.random() * 3)];

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return("It's a draw!");
    }
    else if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")){
        return("You lose! " + computerSelection + " beats " + playerSelection + "!");
    }
    return("You win! " + playerSelection + " beats " + computerSelection + "!");
}

function game(list) {
    for(let i = 1; i <= 5; i++){
        let playerChoice = prompt("Choose one of the three: Rock, Paper, or Scissors")
        console.log(playRound(playerChoice, getComputerChoice()));

    }
}