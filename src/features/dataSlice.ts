import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { data } from '../data/data';

const initialState = data;
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchGallery: (state) => {
      state.loadedGallery = state.items;
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.loadedGallery = state.items.filter(
        (image) => image.category === action.payload
      );
      if (action.payload === 'wszystko') {
        state.loadedGallery = state.items;
      }
    },
  },
});

export const selectData = (state: RootState) => state.dataState;
export const { filterByCategory, fetchGallery } = dataSlice.actions;

export default dataSlice.reducer;
