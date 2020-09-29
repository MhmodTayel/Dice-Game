var scores, roundScore, ActivePlayer;

scores = [0, 0];
roundScore = 0;
ActivePlayer = 1;

//document.querySelector("#current-" + ActivePlayer).textContent = dice;

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  for (let i = 1; i <= 6; i++) {
    setTimeout(function () {
      diceDOM.src = "img/dice-" + i + ".png";
    }, 120 * i);
  }

  var dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  setTimeout(function () {
    diceDOM.src = "img/dice-" + dice + ".png";
  }, 720 );
  
});


