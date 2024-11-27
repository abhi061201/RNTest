import {useDispatch, useSelector} from 'react-redux';
import reducer from './reducers/Reducer1';
import {RootState} from './store';
import {increment, decrement} from './reducers/Reducer1';
import store from './store';
const dispatch = useDispatch();
const state = store.getState();

export function incrementCount(val: number) {
  dispatch(increment(val));
}

export function decrementCount(val: number) {
  dispatch(decrement(val));
}

export function getCountValue() {
  return state.counterSlice.value;
}
