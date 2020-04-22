import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { IReducer } from 'reducers';
import { INDEX } from '../../../typings';
import { Container } from './styles';
import { selectBlock } from 'reducers/actions';
import { N } from 'typings';

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  isActive: boolean;
  value: N;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]));
  }
  return (
    <Container active={state.isActive} onClick={handleClick}>
      {state.value === 0 ? '' : state.value}
    </Container>
  );
};

export default Block;
