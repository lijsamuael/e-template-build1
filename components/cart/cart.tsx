"use client";

import CartItem from "@/components/cart/cartItem";
import { MouseEventHandler } from "react";

import CloseIcon from "../icons/close";

import { useAppSelector, useAppDispatch } from ".//../../app/hooks";
import { RootState } from "@/app/store";
import Link from "next/link";

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
    props.closeCartAction(event);
  }

  const { cartState } = props;

  return (
    <>
      {cartState && (
        <div className="  fixed z-10 top-0 left-0 bg-gray-dark1  w-full h-full flex items-start justify-end gap-x-4 bg-opacity-40">
          <button
            className="top-0 w-12  text-warning-light4 ml-4"
            onClick={handleCartClose}
          >
            <CloseIcon />
          </button>
          <div className="overflow-y-auto top-0 w-[350px] bg-white h-full pt-8 space-y-4 px-4 flex flex-col  pb-8">
            <p className="text-center text-3xl font-bold">YOUR CART</p>
            <hr className="" />
            {cart.cartItems.map((item, index) => (
              <CartItem key={index} cartItem={item}></CartItem>
            ))}
            <div className="space-y-2 text-center">
              <div className="flex justify-center gap-x-8 items-center pt-4 mb-4">
                <p className="text-2xl font-bold ">Total</p>
                <p className="text-xl font-semibold ">${cart.totalPrice} USD</p>
              </div>
              <Link
                href={"/order"}
                className="w-48 py-2 px-8  border-2 border-primary-black bg-gray-dark2 text-primary-white text-xs"
              >
                CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
