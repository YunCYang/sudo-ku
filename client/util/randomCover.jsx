import fisherYatesShuffle from './fisherYatesShuffle';

const randomCover = difficulty => {
  const randomOffset = Math.floor(Math.random() * 3);
  let randomNumArr = [];
  for (let i = 0; i < 81; i++) {
    randomNumArr.push(i);
  }
  randomNumArr = fisherYatesShuffle(randomNumArr);
  let randomSelection = [];
  if (difficulty === 0) {
    randomSelection = randomNumArr.slice(0, 59 + randomOffset);
  } else if (difficulty === 1) {
    randomSelection = randomNumArr.slice(0, 49 + randomOffset);
  } else if (difficulty === 2) {
    randomSelection = randomNumArr.slice(0, 38 + randomOffset);
  } else if (difficulty === 3) {
    randomSelection = randomNumArr.slice(0, 27 + randomOffset);
  } else if (difficulty === 4) {
    randomSelection = randomNumArr.slice(0, 17 + randomOffset);
  }
  const result = [];
  for (const num of randomSelection) {
    result.push([Math.floor(num / 9), num % 9]);
  }
  return result;
};

export default randomCover;
