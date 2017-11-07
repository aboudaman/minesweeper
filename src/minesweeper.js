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
console.log(board);
};
generatePlayerBoard(2, 3);
