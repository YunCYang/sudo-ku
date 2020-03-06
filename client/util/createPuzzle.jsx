import fisherYatesShuffle from './fisherYatesShuffle';
import checkSection from './checkSection';

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
  const nonDiagonal = [];
  const block = [[], [], [], [], [], []];
  const availRandNum = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      nonDiagonal.push([i, j]);
      block[0].push([i, j]);
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      nonDiagonal.push([i, j]);
      block[1].push([i, j]);
    }
  }
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      nonDiagonal.push([i, j]);
      block[2].push([i, j]);
    }
  }
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      nonDiagonal.push([i, j]);
      block[3].push([i, j]);
    }
  }
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      nonDiagonal.push([i, j]);
      block[4].push([i, j]);
    }
  }
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      nonDiagonal.push([i, j]);
      block[5].push([i, j]);
    }
  }
  for (let i = 3; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      availRandNum.push([randNumArr[i][j], 0]);
    }
  }
  const placeNumber = index => {
    if (availRandNum[index][0] + availRandNum[index][1] <= 9) {
      gridNum[nonDiagonal[index][0]][nonDiagonal[index][1]] =
        availRandNum[index][0] + availRandNum[index][1];
    } else {
      gridNum[nonDiagonal[index][0]][nonDiagonal[index][1]] =
        availRandNum[index][0] + availRandNum[index][1] - 9;
    }
    const horiArr = gridNum[nonDiagonal[index][0]];
    const vertArr = [];
    let blockArr = [];
    let prevBlockArr = [];
    for (let i = 0; i < 9; i++) {
      vertArr.push(gridNum[i][nonDiagonal[index][1]]);
    }
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 9; j++) {
        if (nonDiagonal[index][0] === block[i][j][0] &&
            nonDiagonal[index][1] === block[i][j][1]) blockArr = block[i];
        if (!j && i) prevBlockArr = blockArr[i - 1];
        else prevBlockArr = blockArr[i];
      }
    }
    if (checkSection(horiArr) && checkSection(vertArr) && checkSection(blockArr)) {
      // console.log(index);
      if (index < 53) placeNumber(index + 1);
      else return true;
    } else {
      // console.log(index);
      const blockSet = new Set();
      let tempNum = null;
      for (let i = 0; i < 9; i++) {
        if (blockArr[i] !== 0) blockSet.add(blockArr[i]);
      }
      do {
        availRandNum[index][1] += 1;
        if (availRandNum[index][0] + availRandNum[index][1] <= 9) {
          tempNum = availRandNum[index][0] + availRandNum[index][1];
        } else tempNum = availRandNum[index][0] + availRandNum[index][1] - 9;
      } while (blockSet.has(tempNum) && availRandNum[index][1] < 9);
      if (availRandNum[index][1] < 9) {
        // console.log(gridNum);
        placeNumber(index);
      } else {
        gridNum[nonDiagonal[index][0]][nonDiagonal[index][1]] = 0;
        const prevBlockSet = new Set();
        availRandNum[index][1] = 0;
        for (let i = 0; i < 9; i++) {
          if (prevBlockArr[i] !== 0) prevBlockSet.add(prevBlockArr[i]);
        }
        do {
          availRandNum[index - 1][1] += 1;
          if (availRandNum[index - 1][0] + availRandNum[index - 1][1] <= 9) {
            tempNum = availRandNum[index - 1][0] + availRandNum[index - 1][1];
          } else tempNum = availRandNum[index - 1][0] + availRandNum[index - 1][1] - 9;
        } while (blockSet.has(tempNum));
        placeNumber(index - 1);
      }
      // if (availRandNum[index][1] < 8) {
      //   for (let i = 0; i < 9; i++) {
      //     if (blockArr[i] !== 0) blockSet.add(blockArr[i]);
      //   }
      //   do {
      //     availRandNum[index][1] += 1;
      //     if (availRandNum[index][0] + availRandNum[index][1] <= 9) {
      //       tempNum = availRandNum[index][0] + availRandNum[index][1];
      //     } else tempNum = availRandNum[index][0] + availRandNum[index][1] - 9;
      //   } while (blockSet.has(tempNum));
      //   placeNumber(index);
      // } else {
      //   for (let i = 0; i < 9; i++) {
      //     if (prevBlockArr[i] !== 0) blockSet.add(prevBlockArr[i]);
      //   }
      //   do {
      //     availRandNum[index - 1][1] += 1;
      //     if (availRandNum[index - 1][0] + availRandNum[index - 1][1] <= 9) {
      //       tempNum = availRandNum[index - 1][0] + availRandNum[index - 1][1];
      //     } else tempNum = availRandNum[index - 1][0] + availRandNum[index - 1][1] - 9;
      //   } while (blockSet.has(tempNum));
      //   console.log(gridNum);
      //   availRandNum[index][1] = 0;
      //   availRandNum[index - 1][1] += 1;
      //   placeNumber(index - 1);
      // }
    }
  };
  placeNumber(0);
  return gridNum;
};

export default createPuzzle;
