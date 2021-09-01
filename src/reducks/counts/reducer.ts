import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';
import { CounterState } from './types';

const initialState: CounterState = {
  number: 0
}

const counts = reducerWithInitialState(initialState)
  .case(
    actions.increaceNumber,
    state => ({ ...state, number: state.number + 1 })
  )
  .case(
    actions.decreaseNumber,
    state => ({ ...state, number: state.number - 1 })
  )
  .case(
    actions.setNumber,
    (state, payload) => ({
      ...state,
      number: payload.num
    })
  );

export default counts;
