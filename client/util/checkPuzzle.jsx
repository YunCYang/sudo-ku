const checkPuzzle = arr => {
  const testSet = new Set(arr);
  if (testSet.size === 9) return true;
  else return false;
};

export default checkPuzzle;
