/* Load Contents of Page */

$(document).ready(function () {
  $(".project-contacts").load(
    "../../../assets/page-elements/main.html #contacts"
  );

  //Footer Credits
  $(".project-credits").remove();

});

/* Activate Git Button Link */

function gitFunction() {
  window.open(
    "https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/flame-game-web",
    "_blank"
  );
}
