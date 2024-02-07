import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const registerUser = createAsyncThunk("auth/signup", async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_ONESTORE_API}/signup`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return {
      status: 500,
      message: "Unable to signup, Check your form details",
      error: error,
    };
  }
});

export const logIn = createAsyncThunk("auth/login", async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_ONESTORE_API}/login`,
      data,
      config
    );

    const { status, message, token } = response.data;
    localStorage.setItem("AuthToken", token);
    return {
      status,
      message,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Unable to login",
      error: error,
    };
  }
});

const initialState: any = {
  loading: false,
  userInfo: {},
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }),
      builder.addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = false;
        state.error = payload;
      });

    builder.addCase(logIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(logIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }),
      builder.addCase(logIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
