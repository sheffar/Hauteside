"use client";

import { ChevronDown, InfoIcon, Locate, MapPin, Verified } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  price: number;
  quantity: string;
  isPending: boolean;
  stock: number;
  setQuantity: Dispatch<SetStateAction<string>>;
  addToCart: () => void;
};

export default function Delivery({
  price,
  stock,
  quantity,
  setQuantity,
  addToCart,
  isPending,
}: Props) {
  let quantities = [];
  for (let index = 1; index < stock; index++) {
    quantities.push(index);
  }
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="bg-white lg:w-[260px] h-fit flex flex-col justify-between md:p-4 lg:shadow-md rounded-md mt-3 lg:mt-0">
        <div className="">
          <p className="flex gap-[2px] font-semibold">
            <span className="text-2xl mt-1">₦</span>
            <span className="text-3xl">{price.toLocaleString()}</span>
          </p>
        </div>
        <div className="">
          <div className="h-[40px] w-full relative border-gray-400 cursor-pointer border-2 rounded-lg mt-5">
            <p className="absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none">
              Quantity:
            </p>

            <select
              className="pl-[75px] bg-transparent cursor-pointer h-full w-full appearance-none outline-none border-none rounded-lg"
              id=""
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            >
              {quantities.map((q, key) => (
                <option value={q} key={key}>
                  {q}
                </option>
              ))}
            </select>
            <ChevronDown
              size={17}
              className="absolute top-1/2 -translate-y-1/2 right-1 pointer-events-none"
            />
          </div>

          <button
            onClick={addToCart}
            className={` border duration-300  flex items-center justify-center text-white mt-10 font-semibold h-14 rounded-full shadow-md w-full ${
              isPending
                ? "bg-gray-200 text-gray-500 cursor-auto"
                : "active:scale-95 bg-rose-500 hover:bg-rose-600"
            }`}
          >
            {isPending ? (
              <span className="loader2"></span>
            ) : (
              <span>Add to Cart</span>
            )}
          </button>
          <div className="flex py-5 items-center gap-3">
            <div className="h-[1px] flex-1 bg-gray-400"></div>
            <p>Or</p>
            <div className="h-[1px] flex-1 bg-gray-400"></div>
          </div>
          <button className="bg-green-500 text-white border duration-300 active:scale-95 hover:bg-green-600 font-semibold h-14 rounded-full shadow-md w-full">
            Buy Now
          </button>
        </div>
      </div>
      <div className="shadow-md rounded-md flex-1"></div>
    </div>
  );
}
