/* Load Contents of Page */
$(document).ready(function () {
  $(".project-contacts").load(
    "../../../assets/page-elements/main.html #contacts"
  );

  //Footer Credits
  $(".project-credits").remove();

  //Random Number for Player
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  //Random Number for Computer
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".title").innerHTML = "🚩 Player 1 Wins!";
    sizeType();
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector(".title").innerHTML = "Player 2 Wins! 🚩";
    sizeType();
  }
  else {
    document.querySelector(".title").innerHTML = "Draw!";
    sizeType();
  }
});

//Function to change size and type of titlw when winner is declared
function sizeType() {
  $(".title").css({ "font-family": "Indie Flower, cursive", "font-size": "64px" });
};

/* Activate Git Button Link */
function gitFunction() {
  window.open(
    "https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/dice-challenge-web",
    "_blank"
  );
}

