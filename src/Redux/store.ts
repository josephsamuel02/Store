/* eslint-disable @typescript-eslint/no-explicit-any */
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
        // Ignore these action types
        ignoredActions: ["persist/PERSIST"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }) as any,
  devTools: import.meta.env.DEV, // Retain dev tools
});

export const persistor = persistStore(store as any);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
