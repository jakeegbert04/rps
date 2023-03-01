/* 
Project (soft deadline- Wed March 1st):
Build a Rock, Paper, Scissors console style app:
 - must route through some type of menu selections
 - must have proper logic for wins and losses
 - keep track of win loss history
 - be able to play indefinitely and display the win loss record at the end of the program.
 - be able to quit the game.

 need to build a menu to select play game or quit
 keep track of loss and wins
 play unlimited times until quit

 function userGame() {
  let loop = true;
  while (loop === true) {
    const pickNum = prompt("Select one of the following [1] Rock  [2] Paper  [3] Scissors [4] Quit")
    switch(true) {
      case (pickNum === "1"):
        return 1
      case (pickNum === "2"):
        return 2
      case (pickNum === "3"):
        return 3
      case (pickNum === "4"):
        loop = false
        console.log("Thanks for playing duder")
        break
      default:
        console.log("invaild option please try again")
        break

    }
  }
}

 */

let loop = true;
function userGame() {
    while (loop === true) {

    
      const pickNum = prompt("Select one of the following [1] Rock  [2] Paper  [3] Scissors [4] Quit")
      switch(true) {
        case (pickNum === "1"):
          return 1
        case (pickNum === "2"):
          return 2
        case (pickNum === "3"):
          return 3
        case (pickNum === "4"):
          loop = false
          return "Thanks for playing duder"
          
        default:
          console.log("invaild option please try again")
          break
  
      }
    }
}
// while (loop) {
//   userGame()
// }

function aiGame() {
  let random = Math.floor(Math.random() * 3) + 1;
  return random
}
// console.log(randomNum())


function playGame(user, ai) {
  let win = 0
  let loss = 0
  
  switch(true) {
    case (user===ai):
      console.log("it's a tie")
      break
    //AI win
    case (user === 1 && ai === 2):
      loss++
      console.log("you lose")
      break
    case (user === 2 && ai === 3):
      loss++
      console.log("you lose")
      break
    case (user === 3 && ai === 1):
      loss++
      console.log("you lose") 
      break
    // User win
    case (ai === 1 && user === 2):
      win++
      console.log("you win!")
      break
    case (ai === 2 && user === 3):
      win++
      console.log("you win!")
      break
    case (ai === 3 && user === 1):
      win++
      console.log("you win!") 
      break
  }
  console.log(`You have won ${win} amount of times`)
  console.log(`You have loss ${loss} amount of times`)
}

// console.log(playGame(userGame(), aiGame()))


const userInput = prompt("What would you like to do? [1] Play Game [2] Quit")
function menu(userInput) {
  let loops = true;
  switch(true) {
    case (userInput === "1"):
      while (loops) {
        playGame(userGame(), aiGame())
      }

      break
    case (userInput === "2"):
      console.log("Thanks duder! See ya")
      loops = false
      break
    default:
      console.log("Invaild option")
  }
}
menu(userInput)