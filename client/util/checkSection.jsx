const checkSection = arr => {
  const noZeroArr = [];
  for (const item of arr) {
    if (item !== 0) noZeroArr.push(item);
  }
  const testSet = new Set(noZeroArr);
  if (testSet.size === noZeroArr.length) return true;
  return false;
};

export default checkSection;
