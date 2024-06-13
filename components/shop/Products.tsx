"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { framer2 } from "@/lib/framer";

type Props = {
  products: {
    id: string;
    name: string;
    image: string;
    price: number;
    actualPrice: number;
  }[];
  loading: boolean;
};

const variant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (key: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: key * 0.1,
    },
  }),
  exit: (key: number) => ({
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.75,
      delay: key * 0.1,
    },
  }),
};

export default function Products({ products, loading }: Props) {
  return (
    <div>
      <div className="mt-5">
        <div className="">
          <AnimatePresence>
              <motion.div variants={framer2} initial="initial" animate="animate" exit="exit" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-5">
                {products?.map((product, key) => (
                  <motion.div
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={key}
                    custom={key}
                    viewport={{ once: true }}
                    className=""
                  >
                    <Link
                      href={`/details/${product.id}`}
                      className="text-center group"
                      key={key}
                    >
                      <div
                        key={key}
                        className="flex items-center justify-center flex-col "
                      >
                        <img
                          src={product.image}
                          className="h-40 w-full object-contain"
                          alt=""
                        />
                      </div>
                      <p className="max-w-[80%] mx-auto duration-300 group-hover:text-blue-600 overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {product.name}
                      </p>
                      <p className="group-hover:font-semibold duration-300">
                        <span className="font-semibold mr-[2px]">₦</span>
                        {product.price.toLocaleString()}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
