// VARIABLES
// BUTTON
const startGame = document.getElementById("startGame");

// TEXTS
const playerRollText = document.getElementById("playerRollText");
const aiRollText = document.getElementById("aiRollText");
const result = document.getElementById("result");

// SCORE HISTORY
const wonScoreText = document.getElementById("wonScoreText");
const lostScoreText = document.getElementById("lostScoreText");
const drawnScoreText = document.getElementById("drawnScoreText");

// Data
let playerRoll = 0;
let aiRoll = 0;

// Arrays
let getWonScore = [],
  getLostScore = [],
  getDrawnScore = [];

//ONLOAD (Loading the cookies on start)
loadCookie();

// Start game on button click and calls functions
startGame.addEventListener("click", function() {
  getRandomDiceForPlayer();
  getRandomDiceForAI();
  calculateResult();
});

// PROCESSES

// Generating random dice roll for Player
function getRandomDiceForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  showPlayerRollResult();
}

// Generating random dice roll for AI
function getRandomDiceForAI() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
  showAIRollResult();
}

// Calculates the result and displaying and adding score
function calculateResult() {
  if (playerRoll > aiRoll) {
    result.innerHTML = 'Result: WON';
    result.style.color = 'green';
    wonScore++;
  } else if (aiRoll > playerRoll) {
    result.innerHTML = 'Result: LOST';
    result.style.color = 'red';
    lostScore++;
  } else {
    result.innerHTML = 'Result: DRAW';
    result.style.color = 'yellow';
    drawnScore++;
  }
  saveAsCookie(); //Calls the function to update cookie and save it
}

// VISUALS
function showPlayerRollResult() {
  playerRollText.innerHTML = 'Player rolled: ' + playerRoll;
}

function showAIRollResult() {
  aiRollText.innerHTML = 'AI rolled: ' + aiRoll;
}

// COOKIES PART
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0; // Sets the value to zero on the cookie
}

// Saves the cookies and after calls function loadCookie
function saveAsCookie() {
  document.cookie = "wonScore=" + wonScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "lostScore=" + lostScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "drawnScore=" + drawnScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  loadCookie();
}

// Fetching information from the cookies and displays the score
function loadCookie() {
  wonScore = getCookie("wonScore");
  lostScore = getCookie("lostScore");
  drawnScore = getCookie("drawnScore");

  if (getWonScore != null) {
    wonScoreText.innerHTML = 'Won: ' + wonScore;
  }

  if (getLostScore != null) {
    lostScoreText.innerHTML = 'Lost: ' + lostScore;
  }

  if (getDrawnScore != null) {
    drawnScoreText.innerHTML = 'Drawn: ' + drawnScore;
  }
}
