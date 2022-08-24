import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataSlice from '../features/dataSlice';

export const store = configureStore({
  reducer: {
    dataState: dataSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
