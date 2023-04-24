"use client";

import { MouseEventHandler } from "react";
import Link from "next/link";

import CloseIcon from "../icons/close";
import CartItem from "@/components/cart/cartItem";
import { useAppSelector, useAppDispatch } from ".//../../app/hooks";
import { RootState } from "@/app/store";

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
      (event.target as HTMLElement).id === "closeButton"
    ) {
      props.closeCartAction(event);
    }
  }

  const { cartState } = props;

  return (
    <>
      {cartState && (
        <button
          id="container"
          onClick={handleCartClose}
          className="  fixed z-10 top-0 left-0 bg-gray-dark1  w-full h-full flex items-start justify-end  bg-opacity-40"
        >
          <div className="overflow-y-auto top-0 w-full ssm:w-[350px] bg-white h-full pt-2 space-y-4 px-4 flex flex-col justify-between  ">
            <div className="flex flex-col ">
              <div className="flex justify-between items-center">
                <p className="text-center text-3xl font-bold">YOUR CART</p>
                <button
                  className="top-0 w-12  text-warning-light4 ml-4"
                  onClick={handleCartClose}
                >
                  <CloseIcon />
                </button>
              </div>
              <hr className="" />
              {cart.cartItems.map((item, index) => (
                <CartItem key={index} cartItem={item}></CartItem>
              ))}

            </div>
            <div className="w-full">
              <div className="space-y-2 text-center">
                <div className="flex  gap-x-8 justify-between items-center pt-4 mb-4">
                  <p className="text-2xl font-bold ">Total</p>
                  <p className="text-xl font-semibold ">
                    ${cart.totalPrice.toFixed(2)} USD
                  </p>
                </div>
              </div>
              <Link
                href={"/order"}
                className="text-center bg-primary-black text-primary-white py-4 "
              >
                <button className="w-full text-center">CHECKOUT</button>
              </Link>
            </div>
          </div>
        </button>
      )}
    </>
  );
}
