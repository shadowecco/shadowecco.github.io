/* Load Contents of Page */

$(document).ready(function () {
  //Footer Contacts
  $(".project-contacts").load(
    "../../../assets/page-elements/main.html #contacts"
  );

  //Footer Credits
  var picloc = "https://unsplash.com/photos/hBzrr6m6-pc";
  var artloc = "https://unsplash.com/@jamie452";
  var siteloc = "https://unsplash.com";

  $(".project-credits").html(
    '<a href="' +
      picloc +
      '">Image</a> by <a href="' +
      artloc +
      '">Jamie Street</a> on <a href="' +
      siteloc +
      '">Unsplash</a>'
  );
});

/* Activate Git Button Link */

function gitFunction() {
  window.open(
    "https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/love-generator-web",
    "_blank"
  );
}

/* Functions activated after pressing Love button */

function addLove() {
  const loveForm = document.getElementById("love-form");
  const loveButton = document.getElementById("love-btn");
  const loveScore = document.getElementById("love-score");
  const loveComment = document.getElementById("love-comment");

  var crushName = document.getElementById("love-form")[1].value;

  loveForm.remove();
  loveButton.remove();
  calculateScore();

  function calculateScore() {
    const loveNumber = Math.floor(Math.random() * 100) + 1;
    loveScore.innerText = "Your love score is " + loveNumber + "%!";

    if (loveNumber > 70) {
      loveComment.innerText =
        "*** You and " +
        crushName +
        " love each other like Kanye loves Kanye! ***";
    }

    if (loveNumber > 30 && loveNumber <= 70) {
      loveComment.innerText =
        "** Something could be between you two. Fingers crossed! **";
    }

    if (loveNumber <= 30) {
      loveComment.innerText =
        "* You and " + crushName + " go together like oil and water! *";
    }
  }
}
