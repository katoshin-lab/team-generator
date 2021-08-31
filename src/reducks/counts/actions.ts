import * as types from './types';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { SetNumberAction, IncreaceNumberAction, DecreaceNumberAction } from './interfaces';

export const increaceNumber = (): IncreaceNumberAction => ({
  type: types.INCREMENT
});

export const decreaseNumber = (): DecreaceNumberAction => ({
  type: types.DECREMENT
});

export const setNumber = (num: number = 0): SetNumberAction => ({
  type: types.RESET,
  num: num
});
