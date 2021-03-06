// cache the DOM
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const com_rock = document.getElementById("cr");
const com_paper = document.getElementById("cp");
const com_scissors = document.getElementById("cs");


function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })

}

main()

function computer_choice() {
  var BackgroundColor = "RED";
  var choice;
  random = Math.floor(Math.random() * 3);
  if (random == 0) {
    choice = "r";
    computerColor();
    com_rock.style.backgroundColor = BackgroundColor;
  } else if (random == 1) {
    choice = "p";
    computerColor();
    com_paper.style.backgroundColor = BackgroundColor;
  } else {
    choice = "s";
    computerColor();
    com_scissors.style.backgroundColor = BackgroundColor;
  }
  return choice
}

function computerColor() {
    com_rock.style.backgroundColor = "transparent";
    com_paper.style.backgroundColor = "transparent";
    com_scissors.style.backgroundColor = "transparent";
}

function game(choice) {
  var choices;
  switch(choice) {
    case "r":
      com = computer_choice();
      choices = "r" + com;
      break;
    case "p":
      com = computer_choice();
      choices = "p" + com;
      break;
    case "s":
      com = computer_choice();
      choices = "s" + com;
      break;
    }
        
  var final_outcome = possible_outcomes(choices);
  check_scores(final_outcome);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}

function check_scores(final_outcome) {
  if (final_outcome == "win") {
    userScore ++;
    result_div.innerHTML = "Yeeee!! It's a " + final_outcome + "!";
  } else if (final_outcome == "lose") {
    result_div.innerHTML = "Unfortunately, you " + final_outcome + " :(";
    computerScore ++;
  } else {
    result_div.innerHTML = "It's a " + final_outcome + "!";

  }
}

function possible_outcomes(choices) {
  var outcome = {
    win: ["rs","pr","sp"],
    draw: ["rr", "ss", "pp"],
    lose: ["rp", "ps", "sr"]
  };
  
  for (var i in outcome){
    if (outcome[i].includes(choices)) {
      var result = i;
    }
  }
  return result;
}