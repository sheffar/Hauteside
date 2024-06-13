"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { TProduct } from "./type";

type Props = {
  product: TProduct;
  setActive: Dispatch<SetStateAction<number>>
  active: number

};

export default function Main({ product, active, setActive }: Props) {
  return (
    <div>
      <p className="text-2xl md:text-3xl text-blue-950 font-semibold">{product.name}</p>
      <div className="flex items-center gap-5 mt-3">
        <p className="text-lg text-[#ff2d50]">
          -
          {100 -
            Math.floor((100 * product.discountPrice) / product.actualPrice)}
          %
        </p>
        <span className="text-xl md:text-2xl font-semibold">
          <span className="text-xl mr-[2px]">₦</span>{product.discountPrice.toLocaleString()}
        </span>
      </div>
      <p className="text-gray-500 text-xs md:text-13 border-b pb-3 mt-2">
        Last price:{" "}
        <span className="line-through">
          {product.actualPrice.toLocaleString()}
        </span>
      </p>

      <div className="mt-3 border-b pb-5">
        <p className="font-semibold text-xs md:text-13">VARIATION AVAILABLE</p>
        <div className="flex mt-[14px] gap-4">
          {product.sizes.map((size, key) => (
            <div
            key={key}
              onClick={() => setActive(key)}
              className={`h-8 w-9 text-10 md:text-11 duration-300 hover:border-[blue] hover:text-[blue] flex items-center justify-center border-2 rounded active:scale-90 cursor-pointer ${
                active === key
                  ? "border-[blue] font-semibold text-[blue] border-2"
                  : "border-gray-400 font-normal text-gray-400"
              }`}
            >
              <p className="uppercase">{size}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="font-semibold text-sm">About this Item</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          iusto, ratione molestiae quo assumenda sint porro fugit laudantium est
          eligendi officiis unde voluptate pariatur aliquam expedita modi quasi
          veritatis sunt? Dolore officiis facere illum doloremque eaque! In
          minima velit doloribus!
        </p>
      </div>
    </div>
  );
}
