import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Slices/cartSlice";

const appStore = configureStore({
  reducer: { cart: cardReducer },
});

export default appStore;
