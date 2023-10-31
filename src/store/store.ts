// store.ts
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
// import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);

export default store;
