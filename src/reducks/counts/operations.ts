import * as actions from './actions';

export const increase = actions.increaceNumber;
export const decrease = actions.decreaseNumber;
export const set = (num: number = 0) => {
  return actions.setNumber({ num });
}
