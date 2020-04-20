import shuffle from './index';

describe('shuffle', () => {
  it('returns an array with the same length after being shuffled', () => {
    const array = [1, 2, 3];
    const result = shuffle(array);
    expect(result).toHaveLength(3);
  });

  it('returns an array with the same elements after being shuffled', () => {
    const arr = [1, 2, 3];
    const result = shuffle(arr);
    console.log(arr);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
  });
});
