/* jshint esversion: 6 */
let generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board =[];

  for (rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    row = [];
    for (colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
return board;
};

let generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board =[];

  for (rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    row = [];
    for (colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced <= numberOfBombs) {
    //Bomb collision needs to be addressed
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced += 1;
  }
return board;
};

const printBoard = board => {
  console.log(board.map(row =>
    row.join(' | ')).join('\n'));
};
let bombBoard = generateBombBoard(5, 5, 5);
let playerBoard = generatePlayerBoard(5, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('bomb Board: ');
printBoard(bombBoard);
