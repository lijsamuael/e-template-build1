"use client";

import Cart from "@/components/cart/cart";
import { useState } from "react";

import data from "../../../model/data.json";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { changeAmount } from "../../../redux/product/reducer";
import { RootState } from "@/app/store";
import { PosterProductType } from "@/interfaces/type";
import { addToCart } from "@/redux/cart/reducer";

export default function Posters() {
  const posters = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: PosterProductType) => {
    dispatch(addToCart(product));
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpen = () => {
    setIsCartOpen(true);
  };
  const handleClose = () => {
    setIsCartOpen(false);
  };

  const addToCartClicked = (product: PosterProductType) => {
    handleAddToCart(product);
    handleOpen();
  };

  return (
    <div className="flex flex-col   pt-8 sm:mr-0 sm:ml-8  md:mr-0 md:ml-8 lg:mr-[1%] lg:ml-[4%] gap-y-16">
      <h1 className="text-4xl mx-auto">Posters</h1>
      {posters.map((item, index) => (
        <>
          <div className="flex mb-8 max-w-[1200px] mx-auto " key={index}>
            <img
              className="self-center relative z-10 hidden sm:block sm:h-[370px] md:h-[350px]  sm:min-w-[40%] md:min-w-[30%]   lg:h-full   lg:w-[44%]  "
              src="./images/image1.png"
              alt="posterImage"
            />
            <div className="flex flex-col justify-center relative sm:right-[50px]  lg:top-[80px]   xl:top-[40px] border border-black w-full px-4 mx-4 sm:mx-0  sm:pl-24 sm:pr-8 py-8  space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-lg">$ {item.price} USD</p>
                <span className="text-white px-2 py-1 bg-red-400 inline-block text-xs ">
                  FREE SHIPPING
                </span>
              </div>
              <img
                className="relative block w-full sm:hidden"
                src="./images/image1.png"
                alt="posterImage"
              />

              <div className=" flex flex-col space-y-4">
                <p className="">{item.description}</p>
                <p>Dimensions: {item.dimension}</p>
              </div>
              <div className="flex flex-wrap  gap-y-4 gap-x-2 lg:gap-x-4 ">
                <div className="grid grid-cols-9 ssm:flex  ssm:flex-none gap-x-8 ssm:gap-x-4">
                  <input
                    type="text"
                    id="quantity"
                    className="col-span-2 border w-16 g-white border-black px-[10px] py-4 text-center"
                    placeholder={item.quantity.toString()}
                    onChange={(e) =>
                      dispatch(changeAmount(parseInt(e.target.value)))
                    }
                  />
                  <button
                    onClick={() => addToCartClicked(item)}
                    className="col-span-7 border bg-white border-black px-[26px] py-4 whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>
                <button className="border border-black bg-black px-[26px] py-4 text-white whitespace-nowrap grow ssm:flex-none">
                  Buy Now
                </button>
              </div>

              <div className="">
                <button className="text-gray-500 border-b border-gray-500 border-dashed whitespace-nowrap ">
                  More Photos
                </button>
              </div>
            </div>
          </div>
          {isCartOpen && (
            <Cart closeCartAction={handleClose} cartState={isCartOpen} />
          )}
        </>
      ))}
    </div>
  );
}
