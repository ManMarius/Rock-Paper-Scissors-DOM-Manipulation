const rock =
  "https://w7.pngwing.com/pngs/422/99/png-transparent-rock-paper-scissors-computer-icons-scissors-game-white-face.png";
const paper =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVvJtzqNqXpVZcsISY-pN8e8UPeP7AK5i_RiqRsh9j27GrQBayAeaX12mILTkdw40RIA&usqp=CAU";
const scissors = "https://image.pngaaa.com/787/3313787-middle.png";
const _img = document.getElementsByClassName("image");
const _rock = document.getElementById("rock");
const _paper = document.getElementById("paper");
const _scissors = document.getElementById("scissors");
const _imgComp = document.querySelector("#imageComp");
const _resultPanel = document.querySelector(".result");
const _resultText = document.querySelector("#result_text");
const _yourScore = document.querySelector(".score1");
const _computerScore = document.querySelector(".score2");
const _button = document.querySelector(".button");
let yourScore = 0;
let computerScore = 0;
const choices = [rock, paper, scissors];
init();

_rock.addEventListener("click", function () {
  getcomputerChoice();
  gamePlay("rock");
});

_paper.addEventListener("click", function () {
  getcomputerChoice();
  gamePlay("paper");
});

_scissors.addEventListener("click", function () {
  getcomputerChoice();
  gamePlay("scissors");
});

_button.addEventListener("click", init);

function init() {
  yourScore = 0;
  compScore = 0;
}

function getcomputerChoice() {
  const randomNum = Math.floor(Math.random() * choices.length);
  _imgComp.src = choices[randomNum];
  return shortcut[randomNum];
}

function gamePlay(choice) {
  const computerChoice = getcomputerChoice();
  switch (choice + computerChoice) {
    case "rock paper":
    case "paper scissors":
    case "scissors rocl":
      losing();
      break;

    case "rock scissors":
    case "paper rock":
    case "scissors paper":
      winning();
      break;

    default:
      _resultText.textContent = "Tie!";
  }
}
function losing() {
  _resultText.textContent = "you loose!";
  computerScore++;
  _computerScore.textContent = compScore;
}

function winning() {
  _resText.textContent = "you win!";
  yourScore++;
  _yourScore.textContent = yourScore;
}
