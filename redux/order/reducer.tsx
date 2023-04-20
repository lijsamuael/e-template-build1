"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export interface ProductType {
  id: number;
  name: string;
  price: number;
  tag: string;
  dimenstion: string;
  img: string;
  description: string;
}

export interface CartType {
  cartItems: ProductType[];
  amount: number;
  totalPrice: number;
}

function removeObjectWithId(arr: any, id: number) {
  const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const initialState = {
  cartItems: [],
  amount: 0,
  totalPrice: 0,
} as CartType;

export const orderSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    increement: (state) => {
      state.amount += 1;
    },
    decreement: (state) => {
      state.amount -= 1;
    },
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.cartItems.push(action.payload);
    },
    remove: (state, action: PayloadAction<ProductType>) => {
      removeObjectWithId(state, action.payload.id);
    },
  },
});

export const { increement, decreement, addToCart, remove } = orderSlice.actions;

export default orderSlice.reducer;
