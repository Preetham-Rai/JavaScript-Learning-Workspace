let randomNumber = parseInt(Math.random() * 100 + 1); //to generate a random Number

const submit = document.querySelector("#subt"); //Submit button to submit the value
const userInput = document.querySelector("#guessField"); //  User Input of number
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = []; //to store the value
let numGuess = 1;

let playGame = true;
// console.log(randomNumber);
//check if we are ready to playGame
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); //form element basically pushes code to the server,preventDefault() stops from doing that

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid Number!!");
  } else if (guess < 1) {
    alert("Enter Number that is above 1");
  } else if (guess > 100) {
    alert("Enter number that is below 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The Random number was : ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
} //this function is to check the given value is number or not

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Toooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Toooo high`);
  }
} //this checks the number is eqaul to the given random number or not

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
