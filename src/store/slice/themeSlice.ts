import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Itheme = {
  theme: 'pomodoro' | 'shortbreak' | 'longbreak';
  CurrentFont: 'Tilt' | 'Climate' | 'Dancing Script';
};

const initialState: Itheme = {
  theme: 'pomodoro',
  CurrentFont: 'Tilt',
};

export const themeSlice = createSlice({
  name: 'country/theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setCurrentFont(state, action) {
      state.CurrentFont = action.payload;
    },
  },
});

export const { setTheme,  setCurrentFont } =
  themeSlice.actions;
export default themeSlice.reducer;

export const selectTheme = (state: RootState) => state.themeSlice;
