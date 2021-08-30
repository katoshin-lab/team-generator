import * as actions from './actions';

export const increse = actions.increceNumber;
export const decrese = actions.decreseNumber;
export const set = (num: number = 0) => dispatch => dispatch(actions.setNumber(num));
