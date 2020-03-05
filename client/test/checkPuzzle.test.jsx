import checkPuzzle from '../util/checkPuzzle';

describe('test checkPuzzle', () => {
  const correctSample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dupSample = [1, 2, 3, 4, 5, 6, 7, 8, 1];
  it('should return false', () => {
    const incorrectInput = checkPuzzle(dupSample);
    expect(incorrectInput).toBe(false);
  });

  it('should return true', () => {
    const correctInput = checkPuzzle(correctSample);
    expect(correctInput).toBe(true);
  });
});
