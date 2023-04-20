import { useAppDispatch } from "@/app/hooks";
import { PosterProductType } from "@/interfaces/type";
import { remove } from "@/redux/cart/reducer";

export default function CartItem({
  cartItem,
}: {
  cartItem: PosterProductType;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-center text-2xl font-bold">{cartItem.name}</h1>
      <div className="flex gap-x-4">
        <div className="flex flex-col bg-gray-100 mx-2 h-36 ssm:h-48 py-8 justify-center">
          <div className="self-center px-4">
            <img src={`./images/${cartItem.img}`} alt="" className="w-[90px]" />
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <p>
              {"primary-black"} / {cartItem.dimension}
            </p>
            <p>${cartItem.price}</p>
          </div>
          <div className="flex ">
            <button className="border border-black py-1 px-2">-</button>
            <span className="border-b border-t  border-black py-1 px-2">
              {cartItem.quantity}
            </span>
            <button className="border border-black py-1 px-2">+</button>
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
