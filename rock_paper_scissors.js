function computerPlay() {
  let computerChoices = ["paper", "rock", "scissors"];
  let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  return computerChoice;
}

let computerScore
let playerScore
let computerResult = 0
let playerResult = 0

function playRound(computerSelection, playerSelection) {
  if (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") {
    alert("You win, paper beats rock!");
    computerScore = 0;
    playerScore = 1;
  } 
  else if (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors") {
    alert("You win, scissors beat paper!");
    computerScore = 0;
    playerScore = 1;
  }
  else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "rock") {
    alert("You win, rock beat scissors");
    computerScore = 0; 
    playerScore = 1;
  }
  else if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
    alert("You loose, rock beats scissors");
    computerScore = 1;
    playerScore = 0;
  }
  else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") {
    alert("You loose, paper beats rock");
    computerScore = 1;
    playerScore = 0;
  }
  else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
    alert("You loose, scissors beats paper");
    computerScore = 1;
    playerScore = 0;
  } else if (computerSelection === playerSelection.toLowerCase()) {
    alert("even steven");
    computerScore = 1;
    playerScore = 1;
  } else {
    alert("Only paper, rock and scissors are valid options");
  }
}

for (let i=1; i<=5; i++) {
  computerPlay()
  const playerSelection = prompt("Please enter your choice");
  const computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playerSelection);
  playRound(computerSelection, playerSelection);
  computerResult += computerScore
  playerResult += playerScore
}

function announceWinner () {
  if (computerResult > playerResult){
    alert("And the winner is COMPUTER!!!");
  }
  else if (computerResult < playerResult) {
    alert("Congratulations YOU WON!!!");
  }
  else if(computerResult === playerResult) {
    alert("WOW! It's a tie")
  }
}

announceWinner();