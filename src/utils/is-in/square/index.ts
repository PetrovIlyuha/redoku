import { NUMBERS, SQUARE } from 'typings';

interface IInput {
  square: SQUARE;
  value: NUMBERS;
}

/**
 * A function that returns true if the value
 *  being used in the current row of the square
 * @param param0
 */
function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;
