"use client";

import Header from "./header";

import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

export default function Summary() {
  const cart = useAppSelector((state: RootState) => state.carts);

  return (
    <div className="border border-black px-[5%] lg:pb-8 pb-8  space-y-8 lg:space-y-16">
      <Header name="Summary" order={1} required={false}></Header>
      {cart.cartItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-between w-full gap-y-2 sm:gap-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-x-4 w-full gap-y-4">
            <div className="md:w-4/12">
            <img
              src="./images/image1.png"
              alt=""
              width=""
              className="aspect-[2/3]"
            />
            </div>
            <div className="flex flex-col md:w-8/12 sm:justify-center space-y-2 sm:space-y-4 ">
              <div className="w-full space-y-2">
                <p className="text-lg md:text-xl font-bold">{item.name}</p>
                <p className="text-sm md:text-base font-semibold ">
                  {item.dimension}
                </p>
                <p className="text-sm md:text-base  font-normal">{item.description}</p>
              </div>
              <div className="flex  justify-between">
                <p>Quantity {item.quantity}</p>

                <p className="text-base md:text-lg">
                  $ {(item.price * item.quantity).toFixed(2)}
                  {item.currency}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
