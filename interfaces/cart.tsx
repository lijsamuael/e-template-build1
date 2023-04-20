import { PosterProductType } from "./product";

export interface CartType {
    cartItems: PosterProductType[];
    amount: number;
    totalPrice: number;
  }