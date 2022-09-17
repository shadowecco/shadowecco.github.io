/* Load Contents of Page */

$(document).ready(function () {
  $(".project-contacts").load(
    "../../../assets/page-elements/main.html #contacts"
  );

  /* Function to make Javascript Array */

  $("#array-button").on("click", function () {
    var arrayName = document.getElementById("array-name").value;
    var input = $("#input-area").val().split("\n");
    var output = "var " + arrayName + " = [";
    for (var i = 0; i < input.length; i++) {
      output += "\"" + input[i] + "\"";
      if (i < input.length - 1) {
        output += ",";
      }
    }
    output += "]";
    $("#output-area").val(output);
  })

  $("#clear-button").on("click", function () {
    document.getElementById("array-name").value = "";
    document.getElementById("input-area").value = "";
    document.getElementById("output-area").value = "";
  })
});

/* Activate Git Button Link */

function gitFunction() {
  window.open(
    "https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/javascript-array-maker-web",
    "_blank"
  );
}