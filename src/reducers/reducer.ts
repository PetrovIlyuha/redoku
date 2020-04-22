import { AnyAction } from 'redux';
import createFullGrid from 'utils/create-full-grid';
import { IReducer } from './interfaces';
import * as types from './types';
import removeNumbers from 'utils/remove-numbers';
import copyGrid from 'utils/copy-grid';
import compareArrays from 'utils/compare-arrays';
import { GRID } from 'typings';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID: {
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy, 5);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      };
    }
    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect option');
          return state;
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert("Yezz! You've done it");
          return { ...state, workingGrid: [...state.workingGrid] as GRID };
        }
      }
      return state;
    }
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      };
    default:
      return state;
  }
}

export default reducer;
