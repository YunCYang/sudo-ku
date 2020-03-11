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
    randomSelection = randomNumArr.slice(0, 20 + randomOffset);
  } else if (difficulty === 1) {
    randomSelection = randomNumArr.slice(0, 30 + randomOffset);
  } else if (difficulty === 2) {
    randomSelection = randomNumArr.slice(0, 41 + randomOffset);
  } else if (difficulty === 3) {
    randomSelection = randomNumArr.slice(0, 52 + randomOffset);
  } else if (difficulty === 4) {
    randomSelection = randomNumArr.slice(0, 62 + randomOffset);
  }
  const result = [];
  for (const num of randomSelection) {
    result.push([Math.floor(num / 9), num % 9]);
  }
  return result;
};

export default randomCover;
