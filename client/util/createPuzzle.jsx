import fisherYatesShuffle from './fisherYatesShuffle';

const createPuzzle = () => {
  const gridNum = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randNumArr = [];
  for (let i = 0; i < 9; i++) {
    randNumArr.push(fisherYatesShuffle(numArr));
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gridNum[i][j] = randNumArr[0][i * 3 + j];
    }
  }
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      gridNum[i][j] = randNumArr[1][(i - 3) * 3 + j - 3];
    }
  }
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      gridNum[i][j] = randNumArr[2][(i - 6) * 3 + j - 6];
    }
  }
  return gridNum;
};

export default createPuzzle;
