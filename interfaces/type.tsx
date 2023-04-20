export interface PosterProductType {
    id: number;
    name: string;
    price: number;
    tag: string;
    dimension: string;
    img: string;
    description: string;
    quantity:number
  }

  export interface ProductType{
    id: number
    name: string
    price:number
    tag: string
    dimension: string
    img: string
    description: string
  }
  
  export interface CartType {
    cartItems: PosterProductType[];
    amount: number;
    totalPrice: number;
  }