
function computerPlay() {
  let computerChoices = ["paper", "rock", "scissors"];
  let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  return computerChoice;
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") {
    alert("You win, paper beats rock!")
  } 
  else if (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors") {
      alert("You win, scissors beat paper!")
  }
  else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "rock") {
    alert("You win, scissors beat rock")
  }
  else if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
    alert("You loose, rock beats scissors")
  }
  else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") {
    alert("You loose, paper beats rock")
  }
  else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
    alert("You loose, scissors beats paper")
  } else {
    alert("even steven")
  }
}

const playerSelection = "PAPER";
const computerSelection = computerPlay();
console.log(computerSelection);
playRound(computerSelection, playerSelection);
