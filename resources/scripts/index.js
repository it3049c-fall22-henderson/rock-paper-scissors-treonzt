// Elements
const welcomeScreen = document.getElementById(`#welcome-screen`);
const gameScreen = document.getElementById(`#game-screen`);

element.addEventListener(eventType, eventHandlerFunction);
const startGameButton = document.querySelector(`#start-game-button`);

startGameButton.addEventListener("click"); {
  const username = document.getElementById(`#username-input`).value;
   game = new RockPaperScissors(username);
}

const userName = document.getElementById(`#username`);
const userSelection = document.getElementById(`#user-selection`);
const goButton = document.getElementById(`#go-button`);
const scoreParagraph = document.getElementById(`#score`);
const gameHistoryParagraph = document.getElementById(`#game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI() {
  const username = game.username;
  const userScore = gmae.score.user;
  const cpuScore = gamr.score.cpu;

  const scoreParagraph = document.querySelector("#score");
  scoreParagraph.textContent = `${username}: ${userScore} v CPU: ${cpuScore}`;
}

// updateGameHistoryUI
function updateGameHistoryUI() {
  // Select the game history log element
  const gameHistoryLog = document.querySelector(".gameHistoryLog");

  // Clear the current game history
  gameHistoryLog.innerHTML = "";

  // Add each log entry to the game history log element
  this.gameHistory.forEach((logEntry) => {
    const logEntryElement = document.createElement("p");
    logEntryElement.textContent = logEntry;
    gameHistoryLog.appendChild(logEntryElement);
  });
}

// start-game-button EventListener
startGameButton.addEventListener("click", () => {
  // code to run when the button is clicked goes here

  const userName = document.getElementById(`#username`);
  const welcomeScreen = document.querySelector("#welcomeScreen");
  const gameScreen = document.querySelector("#gameScreen");
  
  // Hide the welcome screen and show the game screen
  welcomeScreen.classList.add("d-none");
  gameScreen.classList.remove("d-none");
  game = new RockPaperScissors(userName);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const goButton = document.querySelector("#go-button");
const userSelection = document.querySelector("#userSelection");

// Add an event listener to the go-button that listens for the click event
goButton.addEventListener("click", () => {
  // Get the user selection from the select element
  const userSelectionValue = userSelection.value;

  // Call the play() method of the game object with the user selection
  game.play(userSelectionValue);

  // Update the score tally UI
  game.updateScoreTallyUI();

  // Update the game history UI
  game.updateGameHistoryUI();
});
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });