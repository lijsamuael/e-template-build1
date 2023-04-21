import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { PosterProductType } from "@/interfaces/product";
import { remove, increement, decreement } from "@/redux/cart/reducer";

export default function CartItem({
  cartItem,
}: {
  cartItem: PosterProductType;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-4">
        <div className="flex flex-col bg-gray-100 mx-2 h-full  py-8 justify-center">
          <div className="self-center px-4">
            <img
              src={`./images/${cartItem.img}`}
              alt=""
              className="w-[150px] h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-3 self-center">
          <div>
            <h1 className=" text-2xl font-bold pb-2 whitespace-nowrap">
              {cartItem.name}
            </h1>
            <p>{cartItem.dimension}</p>
            <p>${cartItem.price}</p>
          </div>
          <div className="flex ">
            <button
              onClick={() => dispatch(decreement(cartItem))}
              className="border border-black py-1 px-2"
            >
              -
            </button>
            <span className="border-b border-t  border-black py-1 px-2">
              {cartItem.quantity}
            </span>
            <button
              onClick={() => dispatch(increement(cartItem))}
              className="border border-black py-1 px-2"
            >
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(remove(cartItem))}
            className="border-b border-black text-xs"
          >
            REMOVE
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
