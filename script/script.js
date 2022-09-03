// Finding the length of the diagonal
const findSquareDiagonal = (dimension) => {
  return Math.sqrt(2) * dimension;
};
console.log(findSquareDiagonal(25));

// Finding the area of a scalene triangle
const findAreaScaleneTriangle = (a, b, c) => {
  return 0.25 * Math.sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c));
};
console.log(findAreaScaleneTriangle(5, 6, 7));

// find circumference and surface area of a circle given radius
const findCircumferenceSurfaceArea = (radius) => {
  const pi = Math.PI;
  console.log(2 * (pi * radius));
  console.log(pi * radius ** 2);
};
findCircumferenceSurfaceArea(5);

// find the larger of two integers
const largerOfTwoInts = (a, b) => {
  if (a > b) {
    console.log(`${a} is bigger than ${b}`);
  } else {
    console.log(`${b} is bigger than ${a}`);
  }
};
largerOfTwoInts(15, 10);

const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    console.log("This number is even!");
  } else {
    console.log("This number is odd!");
  }
};
evenOrOdd(2);
evenOrOdd(1);
console.log("-------------------");
console.log("ROCK-PAPER-SCISSORS");
console.log("-------------------");

const game = () => {
  // Take user input, convert all to lower case
  let playerSelection = prompt("Please enter rock, paper, or scissors");
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock") {
    console.log("Player: " + playerSelection);
  } else if (playerSelection === "paper") {
    console.log("Player: " + playerSelection);
  } else if (playerSelection === "scissors") {
    console.log("Player: " + playerSelection);
  }
  // Computer choice logic
  let computerSelection = Math.floor(Math.random() * 3) + 1;
  // Reassign random result to string value to compare with human input
  if (computerSelection === 1) {
    computerSelection = "rock";
    console.log("Computer: " + computerSelection);
  } else if (computerSelection === 2) {
    computerSelection = "paper";
    console.log("Computer: " + computerSelection);
  } else if (computerSelection === 3) {
    computerSelection = "scissors";
    console.log("Computer: " + computerSelection);
  }
  playRound(playerSelection, computerSelection);
  console.log("-------------------");
  return;
};

const playRound = (playerSelection, computerSelection) => {
  if (computerSelection === playerSelection) {
    console.log(`It's a tie! You both chose ${computerSelection}!`);
  } else if (computerSelection === "rock") {
    if (playerSelection === "scissors") {
      console.log(`You lose because ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelection === "paper") {
      console.log(`You win because ${playerSelection} beats ${computerSelection}!`);
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "rock") {
      console.log(`You lose because ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelection === "scissors") {
      console.log(`You win because ${playerSelection} beats ${computerSelection}!`);
    }
  } else if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      console.log(`You win because ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === "paper") {
      console.log(`You lose because ${computerSelection} beats ${playerSelection}!`);
    }
  } else {
    console.log("Please make a valid selection!");
  }
  return;
};

let plays = 0;

while (plays < 5) {
  game();
  plays++;
}
