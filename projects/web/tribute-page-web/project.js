/* Load Contents of Page */

$(document).ready(function () {
  //Project Area
  $(".project-area").load("./page-elements/project.html");
  //Footer Contacts
  $(".project-contacts").load(
    "../../../assets/page-elements/main.html #contacts"
  );

  //Footer Credits
  $(".project-credits").remove();
});

/* Activate Git Button Link */

function gitFunction() {
  window.open(
    "https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/tribute-page-web",
    "_blank"
  );
}
