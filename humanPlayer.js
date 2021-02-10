const readline = require("readline");

class HumanPlayer {
  constructor() {
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'
    this.rl = readline.createInterface(process.stdin, process.stdout);




  }

  getMove(processMove) {
    const rl = readline.createInterface(process.stdin, process.stdout);

    rl.question("Give me two(2) numbers separated by a space (row, column).", (answer) => {
      processMove(answer.split(' '))
    });
    // TODO: Ask the user for their move and process the answer using the rl
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
  }

  processGameOver(isWon) {
    if (isWon) {
      rl.close();
    }
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
  }
}

module.exports = HumanPlayer;
