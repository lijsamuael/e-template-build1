import { PosterProductType } from "./product";

export interface OrderType {
    cartItems: PosterProductType[];
    amount: number;
    totalPrice: number;
  }