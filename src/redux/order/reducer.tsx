"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderType } from "@/interfaces/order";
import { useAppSelector } from "@/app/hooks";

import data from "./../../model/data.json";
import { RootState } from "@/app/store";

function removeObjectWithId(arr: any, id: number) {
  const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const initialState: OrderType = {
  // cart: carts,
  shipping: data.shipping,
  payment: data.payment,
};

export const orderSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.shipping.email = action.payload;
    },
    // changeFullName: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
    // changeStreetAdress: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
    // changeCity: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
    // changeState: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
    // changeZip: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
    // changeCardNumber: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
    // changeExpirationDate: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
    // changeSecurityCode: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
    // changeSCountry: (state, action: PayloadAction<string>) => {
    //   state.shipping.email = action.payload;
    // },
  },
});

export const {
  changeValue,
  // changeFullName,
  // changeStreetAdress,
  // changeCity,
  // changeState,
  // changeZip,
  // changeCardNumber,
  // changeExpirationDate,
  // changeSecurityCode,
  // changeSCountry,
} = orderSlice.actions;

export default orderSlice.reducer;
