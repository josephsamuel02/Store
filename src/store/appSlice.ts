// appSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  sidebarOpen: false,
  navState: "orders",
  previousPath: "/",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    navState: (state, action: PayloadAction<string>) => {
      state.navState = action.payload;
    },
    setPreviousPath: (state, action: PayloadAction<string>) => {
      state.previousPath = action.payload;
    },
  },
});

export const { setDarkMode, setSidebarOpen, navState, setPreviousPath } = appSlice.actions;
export default appSlice.reducer;
