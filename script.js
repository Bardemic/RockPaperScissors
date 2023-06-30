const rpsList = ["rock", "paper", "scissors"];
const selectors = document.querySelectorAll(".selection");

let getComputerChoice = () => rpsList[Math.floor(Math.random() * 3)];

selectors.forEach(selector => selector.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, getComputerChoice()));
}));


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return("It's a draw!");
    }
    else if((playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")){
        return("You lose! " + computerSelection + " beats " + playerSelection + "!");
    }
    return("You win! " + playerSelection + " beats " + computerSelection + "!");
}
