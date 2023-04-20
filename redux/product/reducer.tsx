"use client";
import data from "../../model/data.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PosterProductType } from "@/interfaces/type";

function removeObjectWithId(arr: any, id: number) {
  const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const initialState: PosterProductType[] = data.posters;

export const productSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    changeAmount: (state, action: PayloadAction<{ id: number, quantity: number }>) => {

        const index = state.findIndex(product => product.id === action.payload.id);

        if (index !== -1) {
          state[index].quantity = action.payload.quantity;
        }
      
    }
  },
});

export const { changeAmount } = productSlice.actions;

export default productSlice.reducer;
