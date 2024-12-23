let score = 0;
let scoreKeeper = [];
let maxNum = 10;

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#min-max-select")
    .addEventListener("change", (event) => {
      var myValue = event.target.value;
      alert(`this is ${myValue}`);

      // Change Probability From 10 to 50 or 100 (or 10)
      maxNum = myValue;

      // Change 10 50 100 textContent
      var enterNumberBetween = document.querySelector(
        ".enter-number-between span"
      );
      enterNumberBetween.textContent = maxNum;

      // Cancule Chance Probability
      var probability = document.querySelector(".probability span");
      probability.innerHTML = `${((1 / maxNum) * 100).toFixed(1)}%`;
    });
});

function submitBtn() {
  let randomNumber = Math.floor(Math.random() * maxNum + 1);
  var guess = document.querySelector("#guess");
  var validbtn = document.querySelector(".validbtn");
  var checkGuess = document.querySelector(".check-guess");
  var showNumber = document.querySelector(".show-number");
  var lastScoreInput = document.querySelector("#last-score");
  var myScore = document.querySelector("#number-of-guesses");

  if (guess.value !== "") {
    showNumber.innerHTML = `The number is ${randomNumber}`;

    if (randomNumber == parseInt(guess.value)) {
      checkGuess.innerHTML = ": You won!";
      checkGuess.style.color = "green";
      guess.style.border = "1px solid green";

      validbtn.disabled = true;
      validbtn.style.cursor = "no-drop";

      setInterval(() => {
        validbtn.disabled = false;
        validbtn.style.cursor = "pointer";
      }, 2000);

      // Score
      score++;
      myScore.value = score;
      scoreKeeper.push(score);

      var lastScore = scoreKeeper.sort((a, b) => a - b)[scoreKeeper.length - 1];

      lastScoreInput.value = lastScore;

      localStorage.setItem("lastscore", lastScore);
    }

    //
    else {
      checkGuess.innerHTML = ": You lost!";
      checkGuess.style.color = "red";
      guess.style.border = "1px solid red";
    }
  } else {
    guess.style.border = "1px solid red";
    return;
  }
}

// Save Last Score
window.onload = function () {
  var savedLastScore = localStorage.getItem("lastscore");
  var myBLastScore = document.querySelector("#last-score");

  if (savedLastScore) {
    myBLastScore.value = savedLastScore;
  }
};
