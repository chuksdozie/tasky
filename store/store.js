import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/store/slices/counter.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
