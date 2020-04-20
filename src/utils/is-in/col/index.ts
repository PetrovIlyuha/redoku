import { GRID, NUMBERS } from 'typings';

interface IInput {
  grid: GRID;
  value: NUMBERS;
  col: number;
}

function isInCol({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}

export default isInCol;
