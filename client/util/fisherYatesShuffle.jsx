const fisherYatesShuffle = arr => {
  const arrCopy = [...arr];
  let m = arrCopy.length; let t; let i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arrCopy[m];
    arrCopy[m] = arrCopy[i];
    arrCopy[i] = t;
  }
  return arrCopy;
};

export default fisherYatesShuffle;
