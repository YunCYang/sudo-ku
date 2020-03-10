const deepCloneArray = arr => {
  return arr.map(item => Array.isArray(item) ? deepCloneArray(item) : item);
};

export default deepCloneArray;
