

function userGame() {
  
  const pickNum = prompt(
    "Select one of the following [1] Rock  [2] Paper  [3] Scissors [4] Quit"
  );
  const validChoices = ["1", "2", "3", "4", null];

  if (validChoices.includes(pickNum)) {
    return Number(pickNum);
  } else {
    console.log("invalid option, please try again");
  }
}

function aiGame() {
  let random = Math.floor(Math.random() * 3) + 1;
  return random;
}


let win = 0;
let loss = 0;

const wins = {
  1: 3,
  2: 1,
  3: 2,
};




function playGame(user, ai) {
  switch (true) {
    case user === ai:
      console.log("it's a tie");
      break;
    //AI win
    case user === 1 && ai === 2:
      loss++;
      console.log("you lose");
      break;
    case user === 2 && ai === 3:
      loss++;
      console.log("you lose");
      break;
    case user === 3 && ai === 1:
      loss++;
      console.log("you lose");
      break;
    // User win
    case ai === 1 && user === 2:
      win++;
      console.log("you win!");
      break;
    case ai === 2 && user === 3:
      win++;
      console.log("you win!");
      break;
    case ai === 3 && user === 1:
      win++;
      console.log("you win!");
      break;
    default:
      console.log(`You have won ${win} amount of times`);
      console.log(`You have loss ${loss} amount of times`);
      return false;
  }
}

function menu() {
  let firstRun = true;

  while (true) {
    if (firstRun) {
      const userInput = prompt(
        "What would you like to do? [1] Play Game [2] Quit"
      );

      if (!userInput) {
        console.log("Thanks duder! See ya");
        return false;
      }

      switch (true) {
        case userInput === "1":
          const output = playGame(userGame(), aiGame());
          firstRun = false;
          if (output === false) return false;
          break;
        case userInput === "2":
          console.log("Thanks duder! See ya");
          return false;
        default:
          console.log("Invaild option");
      }
    } else {
      const output = playGame(userGame(), aiGame());
      if (output === false) return output;
    }
  }
}


