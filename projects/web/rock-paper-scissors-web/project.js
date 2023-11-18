
/* Load Contents of Page */

$(document).ready(function () {
  $('.project-contacts').load(
    '../../../assets/page-elements/main.html #contacts'
  );

  //Footer Credits
  $('.project-credits').remove();
});

/* Activate Git Button Link */
$('.projectgit').click(function () {
  window.open(
    'https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/rock-paper-scissors-web',
    '_blank')
});



// DOM Elements
const userScore = document.getElementById('user-score');
const userChoice = document.getElementById('user-choice');
const userChoiceText = document.getElementById('user-choice-text');

const computerScore = document.getElementById('computer-score');
const computerChoice = document.getElementById('computer-choice');
const computerChoiceText = document.getElementById('computer-choice-text');

const resultText = document.getElementById('results');

const userRock = document.getElementById('user-r');
const userPaper = document.getElementById('user-p');
const userScissors = document.getElementById('user-s');

const computerRock = document.getElementById('computer-r');
const computerPaper = document.getElementById('computer-p');
const computerScissors = document.getElementById('computer-s');

const allGameIcons = document.querySelectorAll('.far');


//Which icon beats which in the game
const choices = {
  rock: { name: 'Rock', defeats: ['scissors'] },
  paper: { name: 'Paper', defeats: ['rock'] },
  scissors: { name: 'Scissors', defeats: ['paper'] },
};

let userScoreNumber = 0;
let computerScoreNumber = 0;
let computerRanChoice = '';

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// Reset score & userChoice/computerChoice
function resetAll() {
  userScoreNumber = 0;
  computerScoreNumber = 0;
  userScore.textContent = userScoreNumber;
  computerScore.textContent = computerScoreNumber;
  userChoiceText.textContent = '';
  computerChoiceText.textContent = '';
  resultText.textContent = 'Make your move!';
  resetSelected();
}

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.floor(Math.random() * 3);
  if (computerChoiceNumber === 0) {
    computerRanChoice = 'rock';
  } else if (computerChoiceNumber === 1) {
    computerRanChoice = 'paper';
  } else {
    computerRanChoice = 'scissors';
  }
  return (computerRanChoice)
}


// Add 'selected' styling & computerChoice
function displayComputerChoice(computerRanChoice) {
  var computerRanChoice = computerRandomChoice();
  switch (computerRanChoice) {
    case 'rock':
      computerChoiceText.textContent = ' --- Rock';
      break;
    case 'paper':
      computerChoiceText.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerChoiceText.textContent = ' --- Scissors';
      break;
    default:
      break;
  }
}

// Check result, increase scores, update resultText
function updateScore(userChoice) {
  userRock.classList.remove('draw', 'win', 'lose');
  userPaper.classList.remove('draw', 'win', 'lose');
  userScissors.classList.remove('draw', 'win', 'lose');
  computerRock.classList.remove('draw', 'win', 'lose');
  computerPaper.classList.remove('draw', 'win', 'lose');
  computerScissors.classList.remove('draw', 'win', 'lose');

  if (userChoice === computerRanChoice) {
    switch (userChoice) {
      case 'rock':
        userRock.classList.add('draw');
        break;
      case 'paper':
        userPaper.classList.add('draw');
        break;
      case 'scissors':
        userScissors.classList.add('draw');
        break;
    }

    switch (computerRanChoice) {
      case 'rock':
        computerRock.classList.add('draw');
        break;
      case 'paper':
        computerPaper.classList.add('draw');
        break;
      case 'scissors':
        computerScissors.classList.add('draw');
        break;
    }
    resultText.textContent = 'Draw';
  } else {
    const choice = choices[userChoice];
    if (choice.defeats.indexOf(computerRanChoice) > -1) {

      switch (userChoice) {
        case 'rock':
          userRock.classList.add('win');
          break;
        case 'paper':
          userPaper.classList.add('win');
          break;
        case 'scissors':
          userScissors.classList.add('win');
          break;
      }

      switch (computerRanChoice) {
        case 'rock':
          computerRock.classList.add('lose');
          break;
        case 'paper':
          computerPaper.classList.add('lose');
          break;
        case 'scissors':
          computerScissors.classList.add('lose');
          break;
      }
      resultText.textContent = 'You Won!';
      userScoreNumber++;
      userScore.textContent = userScoreNumber;
    } else {

      switch (userChoice) {
        case 'rock':
          userRock.classList.add('lose');
          break;
        case 'paper':
          userPaper.classList.add('lose');
          break;
        case 'scissors':
          userScissors.classList.add('lose');
          break;
      }

      switch (computerRanChoice) {
        case 'rock':
          computerRock.classList.add('win');
          break;
        case 'paper':
          computerPaper.classList.add('win');
          break;
        case 'scissors':
          computerScissors.classList.add('win');
          break;
      }
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScore.textContent = computerScoreNumber;
    }
  }
}

// Call functions to process turn
function checkResult(userChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(userChoice);
}

// Passing player selection value and styling icons
function select(userChoice) {
  checkResult(userChoice)
  // Add 'selected' styling & userChoice
  switch (userChoice) {
    case 'rock':
      userChoiceText.textContent = ' --- Rock';
      break;
    case 'paper':
      userChoiceText.textContent = ' --- Paper';
      break;
    case 'scissors':
      userChoiceText.textContent = ' --- Scissors';
      break;
    default:
      break;
  }
}