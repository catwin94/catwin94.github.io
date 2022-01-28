import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/data.slice";

export const store = configureStore({
  reducer: {
    dataReducer: dataReducer,
  },
});

export default store;
