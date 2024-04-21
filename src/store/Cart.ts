import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const auth: any = `Bearer ${localStorage.getItem("AuthToken")}`;

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: auth,
  },
};

const initialState: any = {
  loading: false,
  error: null,
  success: false,
  total: 0,
  Cart: [],
};

export const getCart: any = createAsyncThunk("cart/get_cart", async (userId) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_ONESTORE_API}/get_user_cart`,
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

export const addToCart: any = createAsyncThunk("cart/update_cart", async (data: any) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_ONESTORE_API}/update_cart`,
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

export const updateProductQuantity: any = createAsyncThunk(
  "cart/update_cart_quantity",
  async (data: any) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_ONESTORE_API}/update_cart_quantity`,
        data,
        config
      );
      return response.data;
    } catch (error) {
      return {
        message: "unable to update product quantity",
        error: error,
      };
    }
  }
);

export const deleteCartItem: any = createAsyncThunk(
  "cart/delete_cart_item",
  async (data: any) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_ONESTORE_API}/delete_cart_item`,
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
  }
);

const CartReducer = createSlice({
  name: "CartReducer",
  initialState: initialState,
  reducers: {
    get_all_cart_items: (state) => {
      null;
    },
    add_cart_items: (state, { payload }) => {
      const duplicate = state.Cart.filter((item: any) => item.id == payload.id);
      if (!duplicate[0]) {
        state.Cart = payload;

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
      state.Cart = payload;
    });
    builder.addCase(getCart.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });

    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;

      const duplicate = state.Cart.filter((item: any) => item.id == payload.id);
      if (!duplicate[0]) {
        state.Cart = payload;
        state.total = payload.total_price;
      }
    });
    builder.addCase(addToCart.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });

    builder.addCase(updateProductQuantity.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProductQuantity.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;

      state.Cart = payload;
      state.total = payload.total_price;
    });
    builder.addCase(updateProductQuantity.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });
    builder.addCase(deleteCartItem.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCartItem.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;

      state.Cart = payload;
      state.total = payload.total_price;
    });
    builder.addCase(deleteCartItem.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });
  },
});

export const {} = CartReducer.actions;
export default CartReducer.reducer;
