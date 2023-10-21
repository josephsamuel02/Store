import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// require("dotenv").config();
import axios from "axios";

const URL = "";
const auth = "Basic a2Vnb3ctNXx0ZXN0QDEyM3w1Ig==";
const config = {
  headers: {
    Authorization: auth,
  },
};

const PlaceholderOrders = [
  {
    id: "rq45",
    image: "/img/3.png",
    name: "HP Papillon Laptop",
    price: "24577",
    order_level: 1,
    quantity: 4,
  },
  {
    id: "ewer",
    image: "/img/4.png",
    name: "iphone Earpod",
    price: "24577",
    order_level: 2,
    quantity: 5,
  },
  {
    id: "55we",
    image: "/img/5.png",
    name: "Laptop",
    price: "24577",
    order_level: 3,
    quantity: 3,
  },
  {
    id: "456",
    image: "/img/2.png",
    name: "LCD TV",
    price: "24577",
    order_level: 4,
    quantity: 18,
  },
];

const initialState = {
  isLoading: false,
  userId: "59u24t8",
  singleOrder: {
    id: "59u24t8",
    name: "Laptop",
    order_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    order_level: "Computers",
    image: "/img/5.png",
    price: "24577",
    quantity: 11,
  },
  allOrders: [...PlaceholderOrders],
};

export const getAllOrders = createAsyncThunk("kegow/orders", async () => {
  try {
    const response = await axios.get(`${URL}/orders`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});

export const getSingleOrder = createAsyncThunk("kegow/order", async () => {
  try {
    const response = await axios.get(`${URL}/order`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});

const orderReducer = createSlice({
  name: "Order",
  initialState: initialState,
  reducers: {
    get_all_orders: (state) => {
      state.isLoading = true;
    },

    get_single_orders: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.pending, (state) => {
      state.isLoading = true;
      //   state.allOrders = [...payload];
    });
    builder.addCase(getAllOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.allOrders = [...payload];
    });

    builder.addCase(getSingleOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.singleOrder = { ...payload };
    });
  },
});

export const { get_all_orders, get_single_orders } = orderReducer.actions;
export default orderReducer.reducer;
