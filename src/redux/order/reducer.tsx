"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderType } from "@/interfaces/order";
import { useAppSelector } from "@/app/hooks";

import data from "./../../model/data.json";
import { RootState } from "@/app/store";
import { PosterProductType } from "@/interfaces/product";
import { CartType } from "@/interfaces/cart";

function removeObjectWithId(arr: any, id: number) {
  const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

function calculateCartTotal(cartItems: PosterProductType[]): {
  amount: number;
  totalPrice: number;
} {
  let amount = 0;
  let totalPrice = 0;
  for (const item of cartItems) {
    amount += item.quantity;
    totalPrice += item.quantity * item.price;
  }
  totalPrice.toFixed(2);
  return { amount, totalPrice };
}

const initialState: OrderType = {
  orderItems: [],
  totalPrice: 0,
  amount: 0,
};

export const orderSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    increement: (state, action: PayloadAction<PosterProductType>) => {
      const itemIndex = state.orderItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.orderItems[itemIndex].quantity += 1;
      }
      const { amount, totalPrice } = calculateCartTotal(state.orderItems);
      state.amount = amount;
      state.totalPrice = totalPrice;
    },

    decreement: (state, action: PayloadAction<PosterProductType>) => {
      const itemIndex = state.orderItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.orderItems[itemIndex].quantity -= 1;
      }
      const { amount, totalPrice } = calculateCartTotal(state.orderItems);
      state.totalPrice = totalPrice;
    },
    addByAmount: (state, action: PayloadAction<PosterProductType>) => {
      const itemIndex = state.orderItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.orderItems[itemIndex].quantity += action.payload.quantity;
      }
      const { amount, totalPrice } = calculateCartTotal(state.orderItems);
      state.totalPrice = totalPrice;
    },

    addToOrder: (state, action: PayloadAction<CartType>) => {
      state.orderItems = action.payload.cartItems;
      state.totalPrice = action.payload.totalPrice;
      state.amount = action.payload.amount;
    },

    remove: (state, action: PayloadAction<PosterProductType>) => {
      removeObjectWithId(state.orderItems, action.payload.id);
      const { amount, totalPrice } = calculateCartTotal(state.orderItems);
      state.amount = amount;
      state.totalPrice = totalPrice;
    },
  },
});

export const { increement, decreement, addByAmount, addToOrder, remove } =
  orderSlice.actions;

export default orderSlice.reducer;
