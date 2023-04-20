"use client";
import { productSlice } from "@/redux/product/reducer";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart/reducer";
import productReducer from "../redux/product/reducer";

export const store = configureStore({
  reducer: {
    carts: cartReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
