const rpsList = ["rock", "paper", "scissors"];
const selectors = document.querySelectorAll(".selection");
const results = document.querySelector("#results");
const computerScoreDiv = document.querySelector("#computer");
const playerScoreDiv = document.querySelector("#player");
const playAgain = document.querySelector("#playAgain");
const winnerText = document.querySelector("#winnerText");
let computerScore = 0;
let playerScore = 0;


let getComputerChoice = () => rpsList[Math.floor(Math.random() * 3)];

selectors.forEach(selector => selector.addEventListener('click', (e) => {
    if(computerScore !== 5 && playerScore !== 5) results.textContent = (playRound(e.target.id, getComputerChoice()));
}));

function addPoints(winnerDiv, winnerScore){
    winnerScore++;
    winnerDiv.textContent = winnerScore;
    if(winnerScore === 5) gameWon(winnerDiv.id);
    return winnerScore;
}

function gameWon(winner){
    winnerScreen.style.display = "flex";
    winnerText.textContent = `${winner} wins! Want to play again?`;
}

playAgain.addEventListener('click', () => resetGame());

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    computerScoreDiv.textContent = "0";
    playerScoreDiv.textContent = "0";
    winnerScreen.style.display = "none";
    results.textContent = "";
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
