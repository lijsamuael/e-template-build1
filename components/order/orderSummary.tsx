"use client";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

export default function OrderSummary({
  width,
  visiblity,
}: {
  width: any;
  visiblity: any;
}) {
  const className = `flex-col  space-y-4 shrink-0 ${width} ${visiblity}`;
  const cart = useAppSelector((state: RootState) => state.carts);

  return (
    <div className={className}>
      <div className="flex flex-col col-span-1 justify-center border border-black  py-4  bg-white">
        <h2 className="text-xl font-medium border-b border-gray-300 px-4  py-4 flex align-middle">
          Order Summary
        </h2>
        <div className="border-b border-gray-300 px-4 py-4 space-y-2">
          <p className="text-lg font-medium">Posters</p>
          {cart.cartItems.map((item, index) => (
            <div key={index} className="flex justify-between">
              <p className="text-gray-400">{item.name}</p>
              <p>x{item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-300 px-4 py-4">
          <div className="flex justify-between border-b border-gray-300 py-4 ">
            <p className="text-gray-400">Posters</p>
            <p>$ 49.99 USD</p>
          </div>
          <div className="flex justify-between py-4">
            <p className="text-lg font-medium">Total</p>
            <p className="text-xl font-bold">$ {cart.totalPrice} USD</p>
          </div>
        </div>
        <div className="px-4 py-4 space-y-2">
          <p className="text-lg font-medium">Discount Code</p>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4">
            <input
              className=" col-span-3 ssm:col-span-2 bg-gray-light1 px-4 py-4 "
              type="text"
            />
            <button className=" col-span-3 ssm:col-span-1 border border-black py-4 px-8 ">
              Apply
            </button>
          </div>
        </div>
      </div>
      <button className="bg-black text-white w-full py-4 font-semibold">
        PLACE ORDER
      </button>
    </div>
  );
}
