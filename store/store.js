import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/store/slices/counter.slice";
import accountReducer from "@/store/slices/account.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    account: accountReducer,
  },
});
