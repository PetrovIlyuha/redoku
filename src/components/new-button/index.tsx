import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { Button } from 'components/styles/button';
import { createGrid } from 'reducers/actions';

const NewButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>();
  const createNewGrid = useCallback(() => {
    if (window.confirm('Want to play from the start?')) {
      dispatch(createGrid());
    }
  }, [dispatch]);
  return <Button onClick={createNewGrid}>New Game</Button>;
};

export default NewButton;
