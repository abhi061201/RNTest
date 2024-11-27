import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import store, {RootState} from '../../../../src/redux/store';
import {decrement, increment} from '../../../../src/redux/reducers/Reducer1';

jest.mock('redux-persist', () => {
  const actualReduxPersist = jest.requireActual('redux-persist');
  return {
    ...actualReduxPersist,
    persistStore: jest.fn().mockReturnValue({}),
  };
});

// test('should initialize the Redux store without persistence errors', () => {
//   expect(persistReducer).toHaveBeenCalled(); // Assert that persistStore was called
//   expect(store.getState()).toBeDefined(); // Assert store is initialized correctly
// });

describe('Counter Slice Test', () => {
  test('Should handle initial State', () => {
    const state = store.getState() as RootState;
    expect(state.counterSlice.value).toBe(0);
  });

  test('increment test', () => {
    store.dispatch(increment(1));
    const state = store.getState() as RootState;

    expect(state.counterSlice.value).toBe(1);
  });

  test('decrement test', () => {
    store.dispatch(decrement(2));
    const state = store.getState() as RootState;
    expect(state.counterSlice.value).toBe(-2);
  });
});
