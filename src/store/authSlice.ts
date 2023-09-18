// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../api/api";
import { AppThunk } from "./AppThunk";

interface User {
    id: string | number | undefined;
    fullName: string | undefined;
    phoneNumber: string | undefined;
    role: string | undefined;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | {} | undefined;
    phoneNumber: string | undefined;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: {},
    phoneNumber: '',
    token: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticatedUser: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearAuthenticatedUser: (state) => {
            state.isAuthenticated = false;
            state.user = {};
            state.token = null;
        },
        unlockStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        unlockSuccess: (state) => {
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        unlockFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    setAuthenticatedUser,
    clearAuthenticatedUser,
    unlockStart,
    unlockSuccess,
    unlockFailure
} = authSlice.actions;
export default authSlice.reducer;
