import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import User from "./User";
import Cart from "./Cart";
import FetchProducts from "./FetchProducts";

const reducers = combineReducers({
  Auth: authSlice,
  User,
  Cart,
  Products: FetchProducts,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["Auth", "User", "Cart", "Products"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production", // Retain dev tools
});

export const persistor = persistStore(store);

export default store;
