import randomCover from '../util/randomCover';

describe('test cover random position', () => {
  it('test difficulty 0', () => {
    const diff0 = randomCover(0);
    expect(diff0.length).toBeGreaterThanOrEqual(20);
    expect(diff0.length).toBeLessThanOrEqual(22);
  });
  it('test difficulty 1', () => {
    const diff1 = randomCover(1);
    expect(diff1.length).toBeGreaterThanOrEqual(30);
    expect(diff1.length).toBeLessThanOrEqual(32);
  });
  it('test difficulty 2', () => {
    const diff2 = randomCover(2);
    expect(diff2.length).toBeGreaterThanOrEqual(41);
    expect(diff2.length).toBeLessThanOrEqual(43);
  });
  it('test difficulty 3', () => {
    const diff3 = randomCover(3);
    expect(diff3.length).toBeGreaterThanOrEqual(52);
    expect(diff3.length).toBeLessThanOrEqual(54);
  });
  it('test difficulty 4', () => {
    const diff4 = randomCover(4);
    expect(diff4.length).toBeGreaterThanOrEqual(62);
    expect(diff4.length).toBeLessThanOrEqual(64);
  });
});
