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
    "https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/javascript-array-maker-web",
    "_blank"
  );
}

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

/* Function to clear text areas */

$("#clear-button").on("click", function () {
  $("array-name").value = "";
  $("input-area").value = "";
  $("output-area").value = "";
})