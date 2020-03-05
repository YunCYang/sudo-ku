import createPuzzle from '../util/createPuzzle';
import checkPuzzle from '../util/checkPuzzle';

describe('test createPuzzle', () => {
  const testPuzzle = createPuzzle();
  it('basic puzzle test', () => {
    expect(testPuzzle.length).toBe(9);
    expect(testPuzzle[0].length).toBe(9);
    expect(testPuzzle[8].length).toBe(9);
    expect(typeof testPuzzle[0][0]).toBe('number');
  });

  it('horizontal test', () => {
    const horizontalTest = testPuzzle.map(i => checkPuzzle(i));
    expect(horizontalTest.includes(false)).toBe(false);
  });

  it('vertical test', () => {
    let verticalTest = [[], [], [], [], [], [], [], [], []];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        verticalTest[j].push(testPuzzle[i][j]);
      }
    }
    verticalTest = verticalTest.map(i => checkPuzzle(i));
    expect(verticalTest.includes(false)).toBe(false);
  });

  it('grid test', () => {
    let gridTest = [[], [], [], [], [], [], [], [], []];
    gridTest = gridTest.map(i => checkPuzzle(i));
    for (let i = 0; i < 9; i++) {
      const leftBound = (i % 3) * 3;
      let topBound = null;
      if (i >= 6) topBound = 6;
      else if (i >= 3) topBound = 3;
      else topBound = 0;
      for (let j = leftBound; j < leftBound + 3; j++) {
        for (let k = topBound; k < topBound + 3; k++) {
          gridTest[i].push(testPuzzle[k][j]);
        }
      }
    }
    expect(gridTest.includes(false)).toBe(false);
  });
  // console.log(testPuzzle);
});
