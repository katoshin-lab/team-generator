import * as actions from './actions';
import type { AppDispatch } from '../store'

export const increase = actions.increaceNumber;
export const decrease = actions.decreaseNumber;
export const set = (num: number = 0) => (async (dispatch: AppDispatch) => {
  dispatch(actions.setNumber(num));
})
