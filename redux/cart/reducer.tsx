"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

import { PosterProductType, CartType } from "@/interfaces/type";

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

export const cartSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    increement: (state) => {
      state.amount += 1;
    },
    decreement: (state) => {
      state.amount -= 1;
    },
    addToCart: (state, action: PayloadAction<PosterProductType>) => {
      state.cartItems.push(action.payload);
    },
    remove: (state, action: PayloadAction<PosterProductType>) => {
      removeObjectWithId(state.cartItems, action.payload.id);
    },
  },
});

export const { increement, decreement, addToCart, remove } = cartSlice.actions;

export default cartSlice.reducer;
