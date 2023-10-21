import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// require("dotenv").config();
import axios from "axios";

const URL = "http://127.0.0.1:7000/api/kegow-middleware";

const auth = "Basic a2Vnb3ctNXx0ZXN0QDEyM3w1Ig==";
const config = {
  headers: {
    Authorization: auth,
  },
};

const initialState = {
  isLoading: false,
  userId: "59u24t8",
  Cart: [
    {
      id: "wwy5",
      image: "/img/3.png",
      name: "Laptop",
      price: "24577",
      category: "Phone & tablets",
      quantity: 2,
    },
    {
      id: "5653y",
      image: "/img/4.png",
      name: "Laptop",
      price: "24577",
      category: "Phone & tablets",
      quantity: 4,
    },
    {
      id: "565v3",
      image: "/img/5.png",
      name: "Laptop",
      price: "24577",
      category: "Computers",
      quantity: 1,
    },
  ],
};

export const getCart = createAsyncThunk("kegow/cart", async (userId) => {
  try {
    const response = await axios.get(`${URL}/cart/${userId}`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});

export const addToCart = createAsyncThunk("kegow/add_to_cart", async (data: any) => {
  try {
    const response = await axios.post(`${URL}/add_to_cart`, data, config);

    return response.data;
  } catch (error) {
    return {
      message: "unable to add to cart",
      error: error,
    };
  }
});

const CartReducer = createSlice({
  name: "CartReducer",
  initialState: initialState,
  reducers: {
    get_all_cart_items: (state) => {},
    add_cart_items: (state, { payload }) => {
      state.Cart.push(payload);
    },
    update_product_quantity: (state, { payload }) => {
      state.Cart[payload.index].quantity = payload.quantity;
    },
    remove_cart_items: (state, { payload }) => {
      const newState = state.Cart.filter((item) => item.id !== payload);
      state.Cart = newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state, { payload }) => {
      state.isLoading = true;
      //state.Cart = [payload];
    });

    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.Cart = [...payload];
    });

    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      state.Cart.push(payload);
    });
  },
});

export const {
  get_all_cart_items,
  add_cart_items,
  update_product_quantity,
  remove_cart_items,
} = CartReducer.actions;
export default CartReducer.reducer;
