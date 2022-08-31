/* Load Contents of Page */

$(document).ready(function () {
  $(".project-contacts").load(
    "../../../assets/page-elements/main.html #contacts"
  );

  //Footer Credits
  var picloc = "https://unsplash.com/photos/EpIUbeFrqwQ";
  var artloc = "https://unsplash.com/@caderoberts432";
  var siteloc = "https://unsplash.com";

  $(".project-credits").html(
    '<a href="' +
    picloc +
    '">Image</a> by <a href="' +
    artloc +
    '">Cade Roberts</a> on <a href="' +
    siteloc +
    '">Unsplash</a>'
  );
});

/* Activate Git Button Link */

function gitFunction() {
  window.open(
    "https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/star-wars-name-generator-web",
    "_blank"
  );
}

/* Function to generate Star Wars name */

function nameChange() {

  /* DOM Elements */

  const spaceForm = document.getElementById('starwars-form')
  const spaceButton = document.getElementById('star-wars-btn')
  const spaceName = document.getElementById("star-wars-name")
  const spaceAlliance = document.getElementById("star-wars-alliance")

  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var maidenName = document.getElementById('maiden-name').value;
  var birthTown = document.getElementById('birth-town').value;

  var subFirstName = firstName.toLowerCase().slice(0, 2);
  var subLastName = lastName.slice(0, 3);
  var subMaidenName = maidenName.slice(0, 2);
  var subBirthTown = birthTown.toLowerCase().slice(0, 3);

  var swFirstName = subLastName + subFirstName
  var swLastName = subMaidenName + subBirthTown

  const allianceList = ["Jedi", "Sith", "Neutral", "Rebel Alliance", "Galactic Empire", "Resistance", "First Order"]
  var ranAlliance = allianceList[Math.floor(Math.random() * allianceList.length)];

  spaceForm.remove();
  spaceButton.remove();

  spaceName.innerText = "Your Star Wars Name is " + swFirstName[0].toUpperCase() + swFirstName.substring(1) + " " + swLastName[0].toUpperCase() + swLastName.substring(1)

  if (ranAlliance == "Neutral") {
    spaceAlliance.innerText = "Your alliance is " + ranAlliance;
  } else {
    spaceAlliance.innerText = "Your alliance is with the " + ranAlliance;
  }
};

