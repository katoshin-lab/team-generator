import actionCreatorFactory from 'typescript-fsa';
import * as types from './types'

const actionCreator = actionCreatorFactory();

export const increaceNumber = actionCreator(types.INCREMENT);
export const decreaseNumber = actionCreator(types.DECREMENT);
export const setNumber = actionCreator<types.SetNumberAction>(types.RESET);
