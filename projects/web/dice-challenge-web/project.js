/* Load Contents of Page */
$(document).ready(function () {
  //Footer Contacts
  $('.project-contacts').load(
    '../../../assets/page-elements/main.html #contacts'
  );

  //Footer Credits
  $('.project-credits').remove();
});

/* Activate Git Button Link */
$('.projectgit').click(function () {
  window.open(
    'https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/dice-challenge-web',
    '_blank')
});

//Random Number for Player
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = 'dice' + randomNumber1 + '.png'; //dice1.png - dice6.png
var randomImageSource = 'images/' + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = $('img')[0];
image1.setAttribute('src', randomImageSource);

//Random Number for Computer
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';
$('img')[1].setAttribute('src', randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  $('.gametitle').text('🚩 Player 1 Wins!').css({ 'font-family': 'Indie Flower', 'color': '#2dc937' });
}
else if (randomNumber2 > randomNumber1) {
  $('.gametitle').text('🚩 Player 2 Wins!').css({ 'font-family': 'Indie Flower', 'color': '#cc3232' });
}
else {
  $('.gametitle').text('Draw!').css({ 'font-family': 'Indie Flower', 'color': '#e7b416' });
}