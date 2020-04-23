import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { NUMBERS, BLOCK_COORDS, N } from 'typings';
import { Button } from 'components/styles/button';
import { fillBlock } from 'reducers/actions';
import { IReducer } from 'reducers';

interface IProps {
  value: NUMBERS;
}

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue: N;
}

const NumberButton: FC<IProps> = ({ value }) => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const fill = useCallback(() => {
    if (state.selectedBlock) {
      dispatch(fillBlock(value, state.selectedBlock));
    }
    console.log('Troble shoot');
  }, [dispatch, state.selectedBlock, value]);

  return <Button onClick={fill}>{value}</Button>;
};

export default NumberButton;
