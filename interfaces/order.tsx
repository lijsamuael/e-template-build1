import { CartType } from "./cart";
import { PosterProductType } from "./product";

export interface OrderType {
  // cart: CartType,
  shipping: ShippingType;
  payment: PaymentType;
}

export interface ShippingType {
  email: string;
  fullName: string;
  streetAdress: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface PaymentType {
  cardNumber: string;
  expirationData: string;
  securityCode: string;
}

export interface FormType {
  name: string;
  order: number;
  required: boolean;
  warning: string;
  inputs: {
    size: number;
    heading: {
      name: string;
      placeholder: string;
      type: string;
      class: string;
    }[];
    required: boolean;
    class: string;
  }[]
}