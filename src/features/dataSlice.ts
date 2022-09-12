import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Message } from '../data/DataInterface';
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
    showAlert: (state, action: PayloadAction<string>) => {
      const alert = state.alerts;
      Object.keys(alert).map((key) => {
        if (key === action.payload) {
          alert[key as keyof typeof alert] = true;
        }
        return alert;
      });
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      const alert = state.alerts;
      Object.keys(alert).map((key) => {
        if (key === action.payload) {
          alert[key as keyof typeof alert] = false;
        }
        return alert;
      });
    },
    success: (state) => {
      state.loading = true;
    },
    removeSuccess: (state) => {
      state.loading = false;
    },
    setMessage: (state, action: PayloadAction<Message>) => {
      state.message.type = action.payload.type;
      state.message.msg = action.payload.msg;
    },
  },
});

export const selectData = (state: RootState) => state.dataState;
export const {
  filterByCategory,
  fetchGallery,
  showAlert,
  removeAlert,
  success,
  removeSuccess,
  setMessage,
} = dataSlice.actions;

export default dataSlice.reducer;
