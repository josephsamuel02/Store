// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
