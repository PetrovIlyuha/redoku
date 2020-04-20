import isInRow from 'utils/is-in/row';
import { GRID } from 'typings';

describe('isInCol', () => {
  it('it returns true when value is in grid row', () => {
    const grid: GRID = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 4, 2, 7, 8, 5, 6],
    ];

    expect(isInRow({ grid, row: 1, value: 1 })).toBeTruthy();
    expect(isInRow({ grid, row: 7, value: 8 })).toBeTruthy();
    expect(isInRow({ grid, row: 3, value: 5 })).toBeTruthy();
  });

  it('it returns false when value is not in grid row', () => {
    const grid: GRID = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 0, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 0, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 0, 9, 4, 2, 7, 8, 5, 6],
    ];

    expect(isInRow({ grid, row: 1, value: 8 })).toBeFalsy();
    expect(isInRow({ grid, row: 4, value: 5 })).toBeFalsy();
    expect(isInRow({ grid, row: 8, value: 1 })).toBeFalsy();
  });
});
