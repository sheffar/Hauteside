"use client";

import { framer } from "@/lib/framer";
import { motion } from "framer-motion";
type Props = {
  sum: number;
  quantity: number;
};

export default function Summary({ sum, quantity }: Props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={framer}
      className="md:w-[260px] bg-white border shadow-black h-fit top-20 rounded-md md:shadow-md sticky"
    >
      <p className="font-semibold text-15 p-3 border-b-p mb-2">
        Order Summary ({quantity})
      </p>
      <div className="p-3 h-fit">
        <div className="flex justify-between items-center text-gray-600">
          <p className="font-normal">Subtotal</p>
          <p className="font-bold text-gray-800">₦{sum.toLocaleString()}</p>
        </div>
        <div className="flex mt-3 justify-between text-gray-600 items-center">
          <p className="font-normal">Estimated Delivery</p>
          <p className="font-bold text-gray-800">Free</p>
        </div>
        <div className="flex mt-5 text-15 justify-between items-center">
          <p className="font-semibold">Total</p>
          <p className="font-bold">₦{sum.toLocaleString()}</p>
        </div>
        <button className="bg-blue-500 mt-5 text-white font-semibold w-full flex items-center justify-center h-11 duration-300 active:scale-95 rounded-full shadow-md">
          <p>Checkout</p>
        </button>
      </div>
    </motion.div>
  );
}
