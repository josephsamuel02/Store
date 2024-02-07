import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt from "jsonwebtoken";
import axios from "axios";

const auth = localStorage.getItem("AuthToken");
const id: any = jwt.verify(auth, process.env.JWT_SECRET).id;
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: auth,
  },
};

const initialState = {
  loading: false,
  token: null,
  error: null,
  success: false,
  userId: id,
  total: 1,
  Cart: [
    {
      id: "65c1a92bf4re52df3a0313af9",
      name: "Head Set",
      image: "https://placehold.co/600x400",
      product_details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere bibendum interdum.",
      key_features: ["feature1"],
      old_price: 10000,
      price: 110000,

      category: ["phone", "accesories"],
      inStock: 2,

      shopId: "65c1a742dca2e1c2b6e07cca",
      createdAt: "2024-02-06T03:36:11.099Z",
      updatedAt: "2024-02-06T03:36:11.099Z",
    },
  ],
};

export const getCart = createAsyncThunk("shop/cart", async (userId) => {
  try {
    const response = await axios.post(
      `${import.meta.env.JWT_SECRETE}/get_user_cart`,
      { userId: userId },
      config
    );
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});

export const addToCart = createAsyncThunk("shop/update_cart", async (data: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.JWT_SECRETE}/update_cart`,
      data,
      config
    );

    return response.data;
  } catch (error) {
    return {
      message: "unable to update cart",
      error: error,
    };
  }
});

const CartReducer = createSlice({
  name: "CartReducer",
  initialState: initialState,
  reducers: {
    get_all_cart_items: (state) => {
      null;
    },
    add_cart_items: (state, { payload }) => {
      const duplicate = state.Cart.filter((item) => item.id == payload.id);
      if (!duplicate[0]) {
        state.Cart.push(payload);

        // balance the total price of the cart items
        const total = state.total;
        const itemPrice = Number(payload.price) * Number(payload.quantity);
        state.total = itemPrice + total;
      }
    },
    update_product_quantity: (state, { payload }) => {
      state.Cart[payload.index].quantity = payload.quantity;

      // balance the total price of the cart items
      const item_P: any = state.Cart[payload.index].price;

      const old_item_Q = payload.prev_quantity;
      const old_P_Q = Number(item_P) * Number(old_item_Q);

      const new_item_Q = state.Cart[payload.index].quantity;
      const new_P_Q = Number(item_P) * Number(new_item_Q);

      const total = state.total - old_P_Q;
      const newTotal = total + new_P_Q;
      state.total = newTotal;
    },
    remove_cart_items: (state, { payload }) => {
      // balance the total price of the cart items
      const removedItem: Array<any> = state.Cart.filter((item) => item.id == payload);
      const itemPrice = Number(removedItem[0].price) * Number(removedItem[0].quantity);
      const newTotal = Number(state.total) - itemPrice;
      state.total = newTotal;

      // set new cart items
      const newState = state.Cart.filter((item) => item.id !== payload);
      state.Cart = newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.loading = false;
      state.success = true;

      const duplicate = state.Cart.filter((item) => item.id == payload.id);
      if (!duplicate[0]) {
        state.Cart.push(payload);

        // balance the total price of the cart items
        const total = state.total;
        const itemPrice = Number(payload.price) * Number(payload.quantity);
        state.total = itemPrice + total;
      }
    });

    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      state.loading = false;
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
