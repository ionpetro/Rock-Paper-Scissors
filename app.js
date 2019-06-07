// cache the DOM
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

rock_div.addEventListener('click', function() {
  console.log("Rock");
})

paper_div.addEventListener('click', function() {
  console.log("Paper");
})

scissors_div.addEventListener('click', function() {
  console.log("Scissors");
})

