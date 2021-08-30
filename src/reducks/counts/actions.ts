import { Action } from 'redux';
import * as types from './types';
import { SetNumberAction, IncreceNumberAction, DecreceNumberAction } from './interfaces';

export const increceNumber = (): IncreceNumberAction => ({
  type: types.INCREMENT
});

export const decreseNumber = (): DecreceNumberAction => ({
  type: types.DECREMENT
});

export const setNumber = (num: number = 0): SetNumberAction => ({
  type: types.RESET,
  num: num
});
