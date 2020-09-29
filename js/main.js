var scores, roundScore, ActivePlayer, gamePlaying, winningScore;

console.log(winningScore);

function init() {
  scores = [0, 0];
  roundScore = 0;
  ActivePlayer = 1;
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("score-2").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-2").textContent = "0";
  document.getElementById("name-1").textContent = "Player 1";
  document.getElementById("name-2").textContent = "Player 2";
  document.querySelector(".player-1").classList.remove("winner");
  document.querySelector(".player-2").classList.remove("winner");
  document.querySelector(".player-1").classList.remove("active");
  document.querySelector(".player-2").classList.remove("active");
  document.querySelector(".player-1").classList.add("active");
}

init();

//document.querySelector("#current-" + ActivePlayer).textContent = dice;

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    for (let i = 2; i <= 6; i++) {
      setTimeout(function () {
        diceDOM.src = "img/dice-" + i + ".png";
      }, 120 * i);
    }

    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    setTimeout(function () {
      diceDOM.src = "img/dice-" + dice + ".png";
    }, 720);

    if (dice !== 1) {
      // add score
      roundScore += dice;
      setTimeout(function () {
        document.querySelector(
          "#current-" + ActivePlayer
        ).textContent = roundScore;
      }, 1020);
    } else {
      // next player
      // setTimeout(function () {
      //   diceDOM.src = "img/dice-" + 0 + ".png";
      // }, 10);

      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[ActivePlayer - 1] += roundScore;
    document.querySelector("#score-" + ActivePlayer).textContent =
      scores[ActivePlayer - 1];

    if (scores[ActivePlayer - 1] >= winningScore) {
      document.querySelector("#name-" + ActivePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + ActivePlayer).classList.add("winner");
      document
        .querySelector(".player-" + ActivePlayer)
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  ActivePlayer === 1 ? (ActivePlayer = 2) : (ActivePlayer = 1);
  roundScore = 0;
  setTimeout(function () {
    document.getElementById("current-1").textContent = "0";
    document.getElementById("current-2").textContent = "0";
    document.querySelector(".player-1").classList.toggle("active");
    document.querySelector(".player-2").classList.toggle("active");
    document.querySelector(".dice").src = "img/dice-" + 1 + ".png";
    document.querySelector(".dice").style.display = "none";
  }, 1020);
}

document.querySelector(".btn-new").addEventListener("click", function () {
  init();
  winningScore = document.querySelector(".form__field").value;
  console.log(winningScore);
});
