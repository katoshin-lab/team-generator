import { Action } from 'redux';
import * as actions from './actions';
import * as types from './types';

export interface CounterState {
  number: number
}

export interface IncreceNumberAction extends Action {
  type: typeof types.INCREMENT
}

export interface DecreceNumberAction extends Action {
  type: typeof types.DECREMENT
}

export interface SetNumberAction extends Action {
  type: typeof types.RESET
  num: number
}

export type CountActionTypes = IncreceNumberAction | DecreceNumberAction | SetNumberAction;
