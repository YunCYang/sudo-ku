import checkPuzzle from '../util/checkPuzzle';
import checkSection from '../util/checkSection';

describe('check puzzle and section', () => {
  const correctSample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dupSample = [1, 2, 3, 4, 5, 6, 7, 8, 1];
  const dupSample2 = [1, 2, 0, 3, 1, 0, 0, 0, 0];
  it('checkPuzzle should return false', () => {
    const incorrectInput = checkPuzzle(dupSample);
    expect(incorrectInput).toBe(false);
  });

  it('checkPuzzle should return true', () => {
    const correctInput = checkPuzzle(correctSample);
    expect(correctInput).toBe(true);
  });

  it('checkSection should return false', () => {
    const incorrectInput = checkSection(dupSample);
    expect(incorrectInput).toBe(false);
  });

  it('checkSection should return false', () => {
    const incorrectInput2 = checkSection(dupSample2);
    expect(incorrectInput2).toBe(false);
  });

  it('checkSection should return true', () => {
    const correctInput = checkSection(correctSample);
    expect(correctInput).toBe(true);
  });
});
