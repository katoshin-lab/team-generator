export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface CounterState {
  number: number
}

export interface SetNumberAction {
  num: number
}
