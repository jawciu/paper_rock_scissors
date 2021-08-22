const game = document.querySelector('#game');
const playerChoiceDisplay = document.createElement('h2');
const comuterChoiceDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h2');

playerChoiceDisplay.textContent = "Player Choice: ";
comuterChoiceDisplay.textContent = "Computer Choice: ";
resultDisplay.textContent = "Result: ";

game.append(playerChoiceDisplay,comuterChoiceDisplay, resultDisplay);

let choices = ["paper", "rock", "scissors"];
let playerChoice;
let computerChoice;

choices.forEach(choice => {
  const btn = document.createElement('button');
  btn.textContent = choice;
  btn.setAttribute('id', choice);
  game.appendChild(btn);
  btn.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.textContent = "Player Choice: " + choice ;
    computerPlay();
    playRound()
  })
});

function computerPlay() {
  computerChoice = choices[Math.floor(Math.random()*choices.length)];
  comuterChoiceDisplay.textContent = "Computer Choice: " + computerChoice;
}


function playRound() {
  switch(playerChoice+computerChoice) {
    case 'scissorspaper':
    case 'paperrock':
    case 'rockscissors':
      resultDisplay.textContent = "Result: You win!!!"; 
      break;
    case 'paperscissors':
    case 'rockpaper':
    case 'scissorsrock':
      resultDisplay.textContent = "Result: Computer wins!";
      break;
    case 'paperpaper':
    case 'rockrock':
    case 'scissorsscissors':
      resultDisplay.textContent = "Result: Even-steven!!!"
      break;
  }
}

