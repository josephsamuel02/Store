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

const initialState = {
  isLoading: false,
  userId: "59u24t8",
  singleProduct: {
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
  },
  allProducts: [...PlaceholderProducts],
  productsByCategory: [...PlaceholderProducts],
};

export const getAllProducts = createAsyncThunk("kegow/products", async () => {
  try {
    const response = await axios.get(`${URL}/products`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});

export const getProductsByCategory = createAsyncThunk("kegow/products_category", async () => {
  try {
    const response = await axios.get(`${URL}/products_category`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});

export const getSingleProduct = createAsyncThunk("kegow/product", async () => {
  try {
    const response = await axios.get(`${URL}/product`, config);
    return response.data;
  } catch (error) {
    return {
      message: "unable to get data",
      error: error,
    };
  }
});

const productsReducer = createSlice({
  name: "productsReducer",
  initialState: initialState,
  reducers: {
    get_all_products: (state) => {
      state.isLoading = true;
    },
    get_products_by_category: (state) => {
      state.isLoading = true;
    },

    get_single_products: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
      //   state.allProducts = [...payload];
    });
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.allProducts = [...payload];
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.productsByCategory = [...payload];
    });
    builder.addCase(getSingleProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.singleProduct = { ...payload };
    });
  },
});

export const { get_all_products, get_products_by_category, get_single_products } =
  productsReducer.actions;
export default productsReducer.reducer;
