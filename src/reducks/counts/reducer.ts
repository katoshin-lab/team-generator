import * as types from './types';
import { CounterState, CountActionTypes } from './interfaces';

const initialState: CounterState = {
  number: 0
}

const counts = (state = initialState, action: CountActionTypes): CounterState => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      }
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    case types.RESET:
      return {
        ...state,
        number: action.num
      }
    default:
      return {
        ...state
      }
  }
}

export default counts;
