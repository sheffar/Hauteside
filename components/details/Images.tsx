"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
};

export default function Images({ images }: Props) {
  const [active, setActive] = useState(0);
  return (
    <div className="">
      <div className="">
        <div className="md:block h-80 relative bg-white">
          {images.map((image, key) => (
            <img
            key={key}
              src={`${image}`}
              className={`absolute top-1/2 left-1/2 duration-500 -translate-y-1/2 -translate-x-1/2 object-contain ${
                key === active
                  ? "opacity-100 z-10 visible h-72 md;h-80 w-full "
                  : "opacity-0 z-0 invisible h-0 w-0"
              }`}
              alt=""
            />
          ))}
        </div>
        <div className="flex md:hidden items-center gap-3 mt-6 justify-center">
          {images.map((el, key) => (
            <div
              onClick={() => setActive(key)}
              key={key}
              className={`h-4 w-4 duration-300 cursor-pointer active:scale-95 mt-2 rounded-full border-2 ${
                active === key ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="hidden  md:block">
        {images.length > 1 && (
          <div className="grid snap-mandatory items-center justify-center snap-x mt-3 overflow-x-auto auto-cols-[50px] gap-5 grid-flow-col">
            {images.map((image, key) => (
              <div
                className={`h-[250px] snap-start md:h-[50px] overflow-hidden duration-300 hover:md:border-blue-600 border-2 cursor-pointer md:rounded-lg ${
                  active === key ? "md:border-blue-600" : "md:border-gray-400"
                }`}
                key={key}
                onMouseEnter={() => setActive(key)}
              >
                <img
                  src={image}
                  alt=""
                  className="object-contain rounded-lg w-full h-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
