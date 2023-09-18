// appSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    darkMode: boolean;
    sidebarOpen: boolean;
    previousPath: string;
}

const initialState: AppState = {
    darkMode: false,
    sidebarOpen: true,
    previousPath: '/',
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.sidebarOpen = action.payload;
        },
        setPreviousPath: (state, action: PayloadAction<string>) => {
            state.previousPath = action.payload;
        },
    },
});

export const { setDarkMode, setSidebarOpen, setPreviousPath } = appSlice.actions;
export default appSlice.reducer;
