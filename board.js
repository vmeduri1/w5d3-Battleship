class Board {
  constructor(numRows, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    this.grid = [];
    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numCols; j++) {
        this.grid.push([i, j]);
      }
    }
    return this.grid;
  }

  display() {
    console.table(this.grid);
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
  }

  count() {
    return this.numShips
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    if ((pos[0] >= 0 && pos[0] <= this.numRows) && (pos[1] >= 0 && pos[1] <= this.numCols)){
      return true;
    } else {
      return false;
    }
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    if (this.numShips === 0) {
      return true;
    }
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    if (this.grid)
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

module.exports = Board;
