import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { data } from '../data/data';

// interface DataState {
//   data: {};
// }
const initialState = data;
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export const selectData = (state: RootState) => state.dataState;

export default dataSlice.reducer;
