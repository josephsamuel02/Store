import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
require("dotenv").config();
import axios from "axios";
import { Success } from "../components/Admin/components/Notice";

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
const REACT_KEGOW_MERCHANT_URL =
  "https://kegow-broker-dev-soidnv4kmq-ew.a.run.app/api/kegow-merchants";
//const REACT_KEGOW_MIDDLEWARE_URL = "http://127.0.0.1:7000/api/kegow-middleware";
const REACT_KEGOW_MIDDLEWARE_URL = "http://127.0.0.1:7000/api/kegow-middleware";

const auth = "Basic a2Vnb3ctNXx0ZXN0QDEyM3w1Ig==";
const config = {
  headers: {
    Authorization: auth,
  },
};

const InitialState = {
  KegowUsers: <any[]>[],
  all_users_email: <any[]>[],
  send_bulk_email: {},
  isLoading: false,
  error: null,
};

export const grtUsers = createAsyncThunk("kegow/users", async () => {
  try {
    const response = await axios.get(`${REACT_KEGOW_MERCHANT_URL}/users`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});

export const sendBulkEmail = createAsyncThunk("kegow/sendBulkEmail", async (data: any) => {
  try {
    const response = await axios.post(
      `${REACT_KEGOW_MIDDLEWARE_URL}/services/newsletter`,
      data,
      config
    );

    return response.data;
  } catch (error) {
    return {
      message: "unable to send bulk email",
      error: error,
    };
  }
});

const BulkEmailReducer = createSlice({
  name: "BulkEmailReducer",
  initialState: InitialState,
  reducers: {
    get_all_users_email: (state) => {
      // let email = [];
      // if (state.KegowUsers.length > 0) {
      //   for (let i = 0; i < state.KegowUsers.length; i++) {
      //     email.push(state.KegowUsers[i].email);
      //   }
      //   state.all_users_email = [...email];
      // }
    },
    send_bulk_email: (state, { payload }) => {
      async () => {
        await axios
          .post(
            `${process.env.REACT_KEGOW_MERCHANT_URL}/services/newsletter`,
            { payload },
            config
          )
          .then((response) => {
            if (response.data.status === "success") {
              state.send_bulk_email = { message: Success, data: response.data };
            }
          })
          .catch((error) => {
            return {
              message: "unable to get data",
              error: error,
            };
          });
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(grtUsers.pending, (state, { payload }) => {
      state.isLoading = true;
      state.KegowUsers = state.KegowUsers || [payload];
    });

    builder.addCase(grtUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.KegowUsers = [...payload];
      let email = [];
      if (state.KegowUsers.length > 0) {
        for (let i = 0; i < state.KegowUsers.length; i++) {
          email.push(state.KegowUsers[i].email);
        }
        state.all_users_email = [...email];
      }
    });

    builder.addCase(sendBulkEmail.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.send_bulk_email = payload;
    });
  },
});

export const { get_all_users_email, send_bulk_email } = BulkEmailReducer.actions;
export default BulkEmailReducer.reducer;
