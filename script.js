let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

const setMessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // invalid
  if (!guess) {
    setMessage("Invalid, try again!");
  }

  // correct
  else if (guess === secretNumber) {
    document.querySelector(".number").innerHTML = secretNumber;
    setMessage("YAAAY correct number &#127881; !");
    document.querySelector(".message").style.fontSize = "3rem";
    document.querySelector("body").style.backgroundColor = "lightpink";
    document.querySelector(".number").style.width = "30rem";
    // document.getElementsByClassName(".win-color").style.color = "lightpink"; // DE CE NU??

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").innerHTML = highScore;
  }

  //incorrect
  else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".score").innerHTML = 0;
      setMessage("You lost the game &#128406;&#127997; !");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  setMessage("Start guessing...");
  document.querySelector(".score").innerHTML = score;
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "lightblue";
});
