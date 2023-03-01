function game() {
  const scores = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  while (true) {
    const userMove = prompt("Choose a move (1, 2, 3, or 4 to quit)");
    const aiMove = Math.floor(Math.random() * 3) + 1;
    if (userMove == "1") {
      if (aiMove == "2") {
        scores.losses++;
        console.log("AI wins!");
      } else if (aiMove == "3") {
        scores.wins++;
        console.log("You win!");
      } else {
        scores.ties++;
        console.log("Tie!");
      }
    } else if (userMove == "2") {
      // do something
    } else if (userMove == "3") {
      // do something
    } else {
      break;
    }
  }
  return scores;
}

function runGame() {
  let gameScore;
  while (true) {
    gameScore = game();
    const playAgain = prompt("Would you like to play again?");
    if (playAgain == "2") {
      return gameScore;
    }
  }
}

let play = prompt("Would you like to play? (1 - yes, 2 - no)");
if (play == "1") {
  const finalScore = runGame();
  console.log(finalScore);
}
