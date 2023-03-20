/* Load Contents of Page */

$(document).ready(function () {
  //Footer Contacts
  $(".project-contacts").load(
    "../../../assets/page-elements/main.html #contacts"
  );


  //Footer Credits
  var unSplash = 'https://unsplash.com/'

  projectFooterText('https://unsplash.com/photos/hBzrr6m6-pc', 'https://unsplash.com/@jamie452', 'Jamie Street', unSplash, 'Unsplash')

});

/* Activate Git Button Link */
$('.projectgit').click(function () {
  window.open(
    'https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/love-generator-web',
    '_blank')
});

/* Functions activated after pressing Love button */

$('.love-btn').click(function () {
  var crushName = $('.crush-name-text').val();
  const loveNumber = Math.floor(Math.random() * 100) + 1;

  $('.title, .subtitle, .love-form, .love-btn').remove();
  $('.reset, .love-comment, .love-score').show()

  $('.love-score').text('Your love score is ' + loveNumber + '%!');

  if (loveNumber > 70) {
    $(".love-comment").text("*** You and " +
      crushName +
      " love each other like Kanye loves Kanye! ***");
  }

  if (loveNumber > 30 && loveNumber <= 70) {
    $(".love-comment").text("** Something could be between you two. Fingers crossed! **");
  }

  if (loveNumber <= 30) {
    $(".love-comment").text("* You and " + crushName + " go together like oil and water! *");
  }
});
