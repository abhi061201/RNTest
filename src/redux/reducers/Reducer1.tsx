import {createSlice} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}
const initialState: CounterState = {value: 0};

const reducer1 = createSlice({
  name: 'Reducer1',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {increment, decrement} = reducer1.actions;
export default reducer1.reducer;
