"use client";
import { TSumAndQuantity, TUserCart } from "@/actions/cart/type";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { framer } from "@/lib/framer";
import Summary from "./Summary";

type Props = {
  products: TUserCart[];
  totalSumAndQuantity: TSumAndQuantity;
};

export default function Root({ products, totalSumAndQuantity }: Props) {
  return (
    <motion.div 
    variants={framer}
    initial="initial"
    animate="animate" className="mb-32">
      <div className="relative h-[30vh] mt-[70px] w-full">
        <img src="https://images.unsplash.com/photo-1530735038726-a73fd6e6a349?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover" alt="" />
        <p className="absolute text-white bg-black/50 px-5 py-3 rounded-md text-3xl top-1/2 left-1/2 w-full h-full flex items-center justify-center -translate-y-1/2 -translate-x-1/2">Your Cart</p>
      </div>
      <div className="min-h-screen sm:bg-gray-50">
        <div className="container ">
          <div className="grid pt-7 grid-cols-1 md:grid-cols-[1fr_auto] gap-5">
            <div className="bg-white sm:border shadow-md rounded-md h-fit p-2 sm:p-3">
              <div className="flex flex-col gap-3">
                {products.map((el, key) => (
                  <ProductCard product={el} key={key} />
                ))}
              </div>
            </div>
            <Summary
              sum={totalSumAndQuantity.sum}
              quantity={totalSumAndQuantity.qty}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
