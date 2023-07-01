const rpsList = ["rock", "paper", "scissors"];
const selectors = document.querySelectorAll(".selection");
const results = document.querySelector("#results");
const computerScoreDiv = document.querySelector("#computerScore");
const playerScoreDiv = document.querySelector("#playerScore");
let computerScore = 0;
let playerScore = 0;


let getComputerChoice = () => rpsList[Math.floor(Math.random() * 3)];

selectors.forEach(selector => selector.addEventListener('click', (e) => {
    results.textContent = (playRound(e.target.id, getComputerChoice()));
}));

function addPoints(winnerDiv, winnerScore){
    winnerScore++;
    winnerDiv.textContent = `Score: ${winnerScore}`;
    return winnerScore;
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return("It's a draw!");
    }
    else if((playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")){
        computerScore = addPoints(computerScoreDiv, computerScore);
        return(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
    playerScore = addPoints(playerScoreDiv, playerScore);
    return(`You win! ${playerSelection} beats ${computerSelection}!`);
}
