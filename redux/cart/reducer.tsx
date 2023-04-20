"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

import { PosterProductType } from "@/interfaces/product";
import CartItem from "@/components/cart/cartItem";
import { CartType } from "@/interfaces/cart";

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
    increement: (state, action: PayloadAction<PosterProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    decreement: (state, action: PayloadAction<PosterProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },

    addToCart: (state, action: PayloadAction<PosterProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.cartItems.push(action.payload);
        state.amount += 1;
      } else {
        console.log("This item already exists in your cart.");
        window.alert("This item already exists in your cart.");
      }
    },
    remove: (state, action: PayloadAction<PosterProductType>) => {
      removeObjectWithId(state.cartItems, action.payload.id);
    },
  },
});

export const { increement, decreement, addToCart, remove } = cartSlice.actions;

export default cartSlice.reducer;
