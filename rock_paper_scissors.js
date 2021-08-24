const game = document.querySelector('#game');
const playerChoiceDisplay = document.createElement('h2');
const comuterChoiceDisplay = document.createElement('h2');
const score = document.createElement('h2');
const finalResultDisplay = document.createElement('h1');

playerChoiceDisplay.textContent = "Player Choice: ";
comuterChoiceDisplay.textContent = "Computer Choice: ";
score.textContent = `Computer: | Player:`;

game.append(playerChoiceDisplay,comuterChoiceDisplay, score, finalResultDisplay);

let choices = ["paper", "rock", "scissors"];
let playerChoice;
let computerChoice;
let computerScore;
let playerScore;
let computerResult = 0;
let playerResult = 0;

choices.forEach(choice => {
  btn = document.createElement('button');
  btn.textContent = choice;
  btn.setAttribute('id', choice);
  game.appendChild(btn);
  btn.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.textContent = "Player Choice: " + choice ;
    computerPlay();
    playRound();
    });
});

function playRound() {
  switch(playerChoice+computerChoice) {
    case 'scissorspaper':
    case 'paperrock':
    case 'rockscissors':
      computerScore = 0;
      playerScore = 1;
      break;
    case 'paperscissors':
    case 'rockpaper':
    case 'scissorsrock':
      computerScore = 1;
      playerScore = 0;
      break;
    case 'paperpaper':
    case 'rockrock':
    case 'scissorsscissors':
      computerScore = 1;
      playerScore = 1;
      break;
  }
  computerResult += computerScore;
  playerResult += playerScore;
  score.textContent = `Computer: ${computerResult} | Player: ${playerResult}`;

  if (computerResult === 5 && playerResult === 5) {
    finalResultDisplay.textContent = "It's a TIE!!!"
  } else if (computerResult === 5) {
    finalResultDisplay.textContent = "And the winner is COMPUTER!"
  } else if (playerResult === 5) {
    finalResultDisplay.textContent = "THE PLAYER WINS!"
  }
};

function computerPlay() {
  computerChoice = choices[Math.floor(Math.random()*choices.length)];
  comuterChoiceDisplay.textContent = "Computer Choice: " + computerChoice;
};