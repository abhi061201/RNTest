import {configureStore} from '@reduxjs/toolkit';
import reducer1 from './reducers/Reducer1';

const store = configureStore({
  reducer: {
    counterSlice: reducer1,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
