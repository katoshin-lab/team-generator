import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counts from './counts/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  counts
});

export const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: true
})

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
