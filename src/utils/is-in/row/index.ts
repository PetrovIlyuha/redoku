import { GRID, NUMBERS } from 'typings';

interface IInput {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

/**
 * A function to determine if the value has
 * already being used in the current row of the grid
 * @param param0
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value);
}

export default isInRow;
