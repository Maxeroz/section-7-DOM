"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;
document.querySelector(".guess").value = 23;

console.log(document.querySelector(".guess").value);
*/
const createSecretNumber = number => Math.trunc(Math.random() * number) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const numberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

const bodyBackGround = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = createSecretNumber(20);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ No number!";
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    // document.querySelector("body").style.backgroundColor = "#60b347";
    bodyBackGround("#60b347");
    // document.querySelector(".number").style.width = "30rem";
    numberWidth("30rem");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "💥 You lost the game";
      displayMessage("💥 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //When guess is too low
  // } else {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = createSecretNumber(20);

  document.querySelector(".score").textContent = score;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  // document.querySelector(".number").style.width = "15rem";
  numberWidth("15rem");
  document.querySelector(".number").textContent = "?";
  // document.querySelector("body").style.backgroundColor = "#222";
  bodyBackGround("#222");
});
