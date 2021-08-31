import React from 'react';
import { useAppSelector, useAppDispatch } from '../reducks/hooks';
import { increase, decrease, set } from '../reducks/counts/operations';

const test = () => {
  const countsState = useAppSelector(state => state.counts);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>{countsState.number}</div>
      <button onClick={() => dispatch(increase())}>＋</button>
      <button onClick={() => dispatch(decrease())}>ー</button>
      <button onClick={() => dispatch(set(1000))}>ー</button>
    </>
  )
}

export default test;