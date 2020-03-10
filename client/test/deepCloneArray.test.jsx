import deepCloneArray from '../util/deepCloneArray';

describe('test deep clone array', () => {
  it('test deep clone array', () => {
    const testArrayD1 = [1, 2, 3];
    const testArrayD3 = [4, [5, 6, [7, 8]], [9]];
    const cloneTestArrayD1 = deepCloneArray(testArrayD1);
    const cloneTestArrayD3 = deepCloneArray(testArrayD3);
    expect(cloneTestArrayD1.length).toBe(3);
    expect(cloneTestArrayD1[0]).toBe(1);
    expect(cloneTestArrayD1[2]).toBe(3);
    expect(cloneTestArrayD3[0]).toBe(4);
    expect(cloneTestArrayD3[1][1]).toBe(6);
    expect(cloneTestArrayD3[1][2][1]).toBe(8);
    expect(cloneTestArrayD3[2].length).toBe(1);
  });
});
