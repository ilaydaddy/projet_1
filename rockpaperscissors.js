const getUserChoice = (userInput) => {
  // userInput = userInput.toLowerCase();
  if (
    userInput === "Rock" ||
    userInput === "Paper" ||
    userInput === "Bomb" ||
    userInput === "Scissors"
  ) {
    return userInput;
  } else {
    return "Error";
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 0:
      return "Scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie";
  } else if (userChoice === "Rock") {
    if (computerChoice === "Paper") {
      return "Computer won";
    } else {
      return "User won";
    }
  } else if (userChoice === "Paper") {
    if (computerChoice === "Scissors") {
      return "Computer won";
    } else {
      return "User won";
    }
  } else if (userChoice === "Scissors") {
    if (computerChoice === "Rock") {
      return "Computer won";
    } else {
      return "User won";
    }
  }else if(userChoice === "Bomb"){
    return "USER WON!!!!!!!!";
  }
}

function playGame() {
  let userChoice = getUserChoice("Bomb");
  let computerChoice = getComputerChoice();
  console.log(
    "User choice=> " + userChoice + " and Computer choice=> " + computerChoice
  );

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
