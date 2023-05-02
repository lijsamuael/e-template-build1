"use client";

import { MouseEventHandler } from "react";
import Link from "next/link";

import CloseIcon from "../icons/close";
import CartItem from "@/components/cart/cartItem";
import { useAppSelector, useAppDispatch } from ".//../../app/hooks";
import { RootState } from "@/app/store";
import { addToOrder } from "@/redux/order/reducer";

interface CartModalProps {
  cartState: boolean;
  closeCartAction: MouseEventHandler<HTMLButtonElement>;
}

export default function Cart(props: CartModalProps) {
  const cart = useAppSelector((state: RootState) => state.carts);
  const dispatch = useAppDispatch();

  function handleCartClose(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (
      (event.target as HTMLElement).id === "container" ||
      (event.target as HTMLElement).id === "goToOrder" ||
      (event.target as HTMLElement).id === "toOrder" ||
      (event.target as HTMLElement).id === "closeButton"
    ) {
      props.closeCartAction(event);
    }
  }

  const { cartState } = props;

  return (
    <>
      {cartState && cart.cartItems.length != 0 && (
        <button
          id="container"
          onClick={handleCartClose}
          className="  fixed z-1000 inset-0 bg-gray-dark1  w-full h-screen flex items-start justify-end   bg-opacity-40"
        >
          <div className=" overflow-y-auto top-0 w-full ssm:w-[400px] bg-white h-full  space-y-4 px-4 flex flex-col justify-between  ">
            <div className="flex flex-col ">
              <div className="absolute bg-white t-0 w-full  ssm:w-[380px]">
                <div className="flex justify-between items-center pt-2">
                  <p className="text-center text-3xl font-bold">YOUR CART</p>
                  <button
                    className=" pt-1 pr-8 ssm:pr-3"
                    onClick={handleCartClose}
                  >
                    <div className="p-1 bg-black w-8 rounded-lg mb-2">
                      <CloseIcon />
                    </div>
                  </button>
                </div>
                <hr className="mr-8 ssm:mr-3" />
              </div>
              <div className="pt-[52px] pb-28">
                {cart.cartItems.map((item, index) => (
                  <CartItem key={index} cartItem={item}></CartItem>
                ))}
              </div>
            </div>
            <div className="absolute bg-white bottom-0 w-[100%] ssm:w-[380px]">
              <div className=" pb-4  w-full bg-white pr-1">
                <div className=" space-y-2 text-center">
                  <div className="flex  gap-x-8 justify-between items-center pt-4 mb-4 ssm:pr-0 pr-4">
                    <p className="text-2xl font-bold ">Total</p>
                    <p className="text-lg   text-black px-2">
                      ${cart.totalPrice.toFixed(2)} USD
                    </p>
                  </div>
                </div>
                <Link
                  id="goToOrder"
                  href={"/order"}
                  onClick={() => {
                    dispatch(addToOrder(cart));
                    handleCartClose;
                  }}
                  className="text-center bg-primary-black text-primary-white py-4 "
                >
                  <button
                    onClick={() => {
                      dispatch(addToOrder(cart));
                      handleCartClose;
                    }}
                    id="toOrder"
                    className="w-full text-center "
                  >
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </button>
      )}
    </>
  );
}
