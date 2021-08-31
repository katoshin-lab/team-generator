import { Action } from 'redux';
import * as types from './types';

export interface CounterState {
  number: number
}

export interface IncreaceNumberAction extends Action {
  type: typeof types.INCREMENT
}

export interface DecreaceNumberAction extends Action {
  type: typeof types.DECREMENT
}

export interface SetNumberAction extends Action {
  type: typeof types.RESET
  num: number
}

export type CountActionTypes = IncreaceNumberAction | DecreaceNumberAction | SetNumberAction;
