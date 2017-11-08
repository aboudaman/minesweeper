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
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced += 1;
    }


  }
return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
      neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
          numberOfBombs += 1;
        }
    }

  });
  return numberOfBombs;
};

const printBoard = board => {
  console.log(board.map(row =>
    row.join(' | ')).join('\n'));
};

let bombBoard = generateBombBoard(5, 5, 5);
let playerBoard = generatePlayerBoard(5, 5);

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' '){
    console.log('This tile has already been flipped');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';

  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};
console.log('Player Board: ');
printBoard(playerBoard);
console.log('bomb Board: ');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board: ');
printBoard(playerBoard);
