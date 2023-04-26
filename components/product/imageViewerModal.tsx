import { MouseEventHandler } from "react";
import CloseIcon from "../icons/close";
import Link from "next/link";
import { PosterProductType } from "@/interfaces/product";

interface ImageViewerProps {
  imageViewerState: boolean;
  product: PosterProductType;
  closeImageViewer: MouseEventHandler<HTMLButtonElement>;
}

export default function ImageViewerModal(props: ImageViewerProps) {
  function handleCartClose(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (
      (event.target as HTMLElement).id === "container" ||
      (event.target as HTMLElement).id === "closeButton"
    ) {
      props.closeImageViewer(event);
    }
  }

  return (
    <>
      {props.imageViewerState && (
        <button
          id="container"
          onClick={handleCartClose}
          className="  fixed z-10 inset-0 bg-gray-dark1  w-full h-screen flex  justify-center items-center  bg-opacity-40 py-32"
        >
          <div className="overflow-y-auto flex flex-col  w-full ssm:w-[600px] bg-white h-[780px] p-4 rounded-lg">
            <div className="flex flex-col ">
              <div className="flex justify-between items-center">
                <p className="text-center text-3xl font-bold">
                  {props.product.name}
                </p>
                <button
                  className="top-0 w-12  text-warning-light4 ml-4"
                  onClick={handleCartClose}
                >
                  <div className="p-1 bg-black w-8 rounded-lg mb-2">
                    <CloseIcon />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex w-full h-[600px] flex-wrap items-center">
              <div className="w-full  ssm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full ssm:h-64 w-full rounded-lg object-cover object-center"
                  src={`/images/${props.product.img}`}
                />
              </div>
              <div className="w-96 ssm:h-auto ssm:w-1/3 p-1 md:p-2 mx-auto">
                <img
                  alt="gallery"
                  className="block h-full ssm:h-64 w-full rounded-lg object-cover object-center"
                  src={`/images/${props.product.img}`}
                />
              </div>
              <div className="w-full ssm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full ssm:h-64 w-full rounded-lg object-cover object-center"
                  src={`/images/${props.product.img}`}
                />
              </div>
              <div className="w-96 ssm:w-1/2 p-1 md:p-2 mx-auto">
                <img
                  alt="gallery"
                  className="block h-full ssm:h-96 w-full rounded-lg object-cover object-center"
                  src={`/images/${props.product.img}`}
                />
              </div>
              <div className="w-full  ssm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full ssm:h-96  w-full rounded-lg object-cover object-center"
                  src={`/images/${props.product.img}`}
                />
              </div>
            </div>
          </div>
        </button>
      )}
    </>
  );
}
