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
const URL = import.meta.env.VITE_ONESTORE_API;

export const getAllProducts: any = createAsyncThunk("products/get_products", async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_ONESTORE_API}/get_products`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
      status: 500,
    };
  }
});

export const getProductsByCategory: any = createAsyncThunk(
  "products/get_products_by_category",
  async (data) => {
    try {
      const response = await axios.post(`${URL}/get_products_by_category`, data, config);
      return response.data;
    } catch (error) {
      return {
        message: "unable to get data",
        error: error,
        status: 500,
      };
    }
  }
);

export const getSingleProduct: any = createAsyncThunk(
  "products/get_one_product",
  async (data) => {
    try {
      const response = await axios.post(`${URL}/get_one_product`, data, config);
      return response.data;
      return response.data;
    } catch (error) {
      return {
        status: 500,
        message: "unable to get data",
        error: error,
      };
    }
  }
);

const PlaceholderProducts = [
  {
    id: "456",
    image: "/img/g.png",
    name: "Hp 15 Intel Core I3 15.6 4GB RAM/1TB HDD Win 10 - Black",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "326139",
    category: "Computers",
  },
  {
    id: "rq45",
    image: "/img/k.png",
    name: "SHARE THIS PRODUCT Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "348000",
    category: "Computers",
  },
  {
    id: "ewer",
    image: "/img/b.png",
    name: "Havit H633BT Wireless Headphone - Bluetooth Stereo Headset",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "16500",
    category: "Accessories",
  },
  {
    id: "55we",
    image: "/img/c.png",
    name: "Kingskartel Kings-Kartel Stylish (Brown & Black)",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "16999",
    category: "Fashion",
  },
  {
    id: "tqcw",
    image: "/img/h.png",
    name: "Bluetooth radio Clear sound",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "24577",
    category: "Accessories",
  },
  {
    id: "wct",
    image: "/img/i.png",
    name: "LapSoft Silicone Case For IPhone top",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "24577",
    category: "Phone & tablets",
  },
  {
    id: "wtv",
    image: "/img/milo tin 400g.jpg",
    name: "Milo Hot Chocolate Refill",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "24577",
    category: "Grocery",
  },
  {
    id: "wwy5",
    image: "/img/3.png",
    name: "Oriflame toothpaste , teeth whitener",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "24577",
    category: "Grocery",
  },

  {
    id: "wtv",
    image: "/img/Milo refill 800G.jpg",
    name: "Milo Sachet",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "24577",
    category: "Grocery",
  },
  {
    id: "tqcw",
    image: "/img/h.png",
    name: "Bluetooth radio Clear sound",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "24577",
    category: "Computers",
  },
  {
    id: "5653y",
    image: "/img/4.png",
    name: "Feminel Natural wash for wemen",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "24577",
    category: "Grocery",
  },

  {
    id: "5653y",
    image: "/img/golden morn 900g.jpg",
    name: "golden morn 900g",
    product_details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key_features: [
      "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
      "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
    ],
    price: "24577",
    category: "Grocery",
  },
];
const singleP = {
  id: "59u24t8",
  name: "Laptop",
  product_details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  key_features: [
    "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    "Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor",
  ],
  category: "Computers",
  image: "/img/5.png",
  price: "24577",
};
const initialState: any = {
  loading: false,
  userId: "",
  token: null,
  error: null,
  success: false,
  singleProduct: {},
  allProducts: [],
  productsByCategory: [],
};
const productsReducer = createSlice({
  name: "productsReducer",
  initialState: initialState,
  reducers: {
    get_all_products: (state) => {
      state.loading = true;
    },
    get_products_by_category: (state) => {
      state.loading = true;
    },

    get_single_products: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.allProducts = payload;
    });

    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getProductsByCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.productsByCategory = payload;
    });

    builder.addCase(getProductsByCategory.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getSingleProduct.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.singleProduct = payload;
    });
    builder.addCase(getSingleProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { get_all_products, get_products_by_category, get_single_products } =
  productsReducer.actions;
export default productsReducer.reducer;
