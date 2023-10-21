// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string | number | undefined;
  fullName: string | undefined;
  email: string | undefined;
  role: string | undefined;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | unknown;
  email: string;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {},
  email: "",
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
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
  },
});

export const { setAuthenticatedUser, clearAuthenticatedUser } = authSlice.actions;
export default authSlice.reducer;
