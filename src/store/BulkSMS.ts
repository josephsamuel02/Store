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

const initialState = {
  KegowUsers: <any[]>[],
  all_users_phone: <any[]>[],
  send_bulk_sms: {},
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

export const sendBulkSMS = createAsyncThunk("kegow/sendBulkSMS", async (data: any) => {
  try {
    const response = await axios.post(
      `${REACT_KEGOW_MIDDLEWARE_URL}/services/newsletter`,
      data,
      config
    );

    return response.data;
  } catch (error) {
    return {
      message: "unable to send bulk SMS",
      error: error,
    };
  }
});

const BulkSMSReducer = createSlice({
  name: "BulkSMSReducer",
  initialState: initialState,
  reducers: {
    get_all_users_phone: (state) => {
      let phoneNumber = [];
      if (state.KegowUsers.length > 0) {
        for (let i = 0; i < state.KegowUsers.length; i++) {
          phoneNumber.push(state.KegowUsers[i].phoneNumber);
        }
        state.all_users_phone = [...phoneNumber];
      }
    },
    send_bulk_sms: (state, { payload }) => {
      async () => {
        await axios
          .post(
            `${process.env.REACT_KEGOW_MERCHANT_URL}/services/newsletter`,
            { payload },
            config
          )
          .then((response) => {
            if (response.data.status === "success") {
              state.send_bulk_sms = { message: Success, data: response.data };
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
      state.KegowUsers = [payload];
    });

    builder.addCase(grtUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.KegowUsers = [...payload];
      let phoneNumber = [];
      if (state.KegowUsers.length > 0) {
        for (let i = 0; i < state.KegowUsers.length; i++) {
          phoneNumber.push(state.KegowUsers[i].phone_number);
        }
        state.all_users_phone = [...phoneNumber];
      }
    });

    builder.addCase(sendBulkSMS.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.send_bulk_sms = payload;
    });
  },
});

export const { get_all_users_phone, send_bulk_sms } = BulkSMSReducer.actions;
export default BulkSMSReducer.reducer;
