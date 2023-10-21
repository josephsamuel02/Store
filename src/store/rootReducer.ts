// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import authReducer from "./authSlice";
import CartReducer from "./Cart";
import productsReducer from "./Products";
import orderReducer from "./Order";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  Cart: CartReducer,
  Products: productsReducer,
  Order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
