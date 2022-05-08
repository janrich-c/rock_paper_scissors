let playerScore = 0;
let computerScore = 0;
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round_result");
const playerTally = document.querySelector("#player_tally");
const computerTally = document.querySelector("#computer_tally");
const btnReset = document.querySelector("#reset");

function computerPlay() {
  let choice = "";
  let iChoice = Math.floor(Math.random() * 3 + 1);
  switch (iChoice) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;

    default:
      break;
  }
  return choice;
}

function playRound(playerThrow, computerThrow) {
  let output;
  //TODO: add color to selected button
  changeButtonColors();

  while (playerThrow == computerThrow) {
    computerThrow = computerPlay();
  }
  if (playerThrow == "rock" && computerThrow == "paper") {
    computerScore++;
    output = `Computer throws ${computerThrow}.<br>Paper beats rock.<br>Computer wins!`;
  }
  if (playerThrow == "rock" && computerThrow == "scissors") {
    playerScore++;
    output = `Computer throws ${computerThrow}.<br>Rock beats scissors.<br>Player wins!`;
  }

  if (playerThrow == "paper" && computerThrow == "rock") {
    playerScore++;
    output = `Computer throws ${computerThrow}.<br>Paper beats rock.<br>Player wins!`;
  }
  if (playerThrow == "paper" && computerThrow == "scissors") {
    computerScore++;
    output = `Computer throws ${computerThrow}.<br>Scissors beat paper.<br>Computer wins!`;
  }

  if (playerThrow == "scissors" && computerThrow == "rock") {
    computerScore++;
    output = `Computer throws ${computerThrow}.<br>Rock beats scissors.<br>Computer wins!`;
  }
  if (playerThrow == "scissors" && computerThrow == "paper") {
    playerScore++;
    output = `Computer throws ${computerThrow}.<br>Scissors beat paper.<br>Player wins!`;
  }

  //Update score
  roundResult.innerHTML = output;
  playerTally.innerHTML = `Player: ${playerScore}`;
  computerTally.innerHTML = `Computer: ${computerScore}`;
  //Show reset button again
  btnReset.style.display = "block";

  return output;

  function changeButtonColors() {
    btnPaper.style.backgroundColor = "#EFEFEF";
    btnRock.style.backgroundColor = "#EFEFEF";
    btnScissors.style.backgroundColor = "#EFEFEF";
    if (playerThrow == "rock") btnRock.style.backgroundColor = "#C5C5C5";
    if (playerThrow == "paper") btnPaper.style.backgroundColor = "#C5C5C5";
    if (playerThrow == "scissors")
      btnScissors.style.backgroundColor = "#C5C5C5";
  }
}

function resetPage() {
  playerScore = 0;
  computerScore = 0;

  btnPaper.style.backgroundColor = "#EFEFEF";
  btnRock.style.backgroundColor = "#EFEFEF";
  btnScissors.style.backgroundColor = "#EFEFEF";
  roundResult.innerHTML = "";
  playerTally.innerHTML = "";
  computerTally.innerHTML = "";
  btnReset.style.display = "none";
}

btnRock.addEventListener("click", (event) => playRound("rock", computerPlay()));
btnPaper.addEventListener("click", (event) =>
  playRound("paper", computerPlay())
);
btnScissors.addEventListener("click", (event) =>
  playRound("scissors", computerPlay())
);
btnReset.addEventListener("click", (event) => resetPage());
