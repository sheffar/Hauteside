"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { framer } from "@/lib/framer";
import { AddToRecentlyViewed } from "@/actions/product/AddToRecentlyViewed";

type Props = {
  products: {
    name: string;
    id: string;
    image: string;
    price: number;
  }[];
  loading: boolean;
  input: string;
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
      delay: 0.1 * key,
    },
  }),
  exit: (key: number) => ({
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.75,
      delay: 0.1 * key,
    },
  }),
};

export default function Products({ products, loading, input }: Props) {

  return (
    <div className="">
      <div className="">
        <AnimatePresence>
          {input.length > 2 && products && (
            <motion.div
              variants={framer}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 container gap-10"
            >
              {products.map((product, key) => (
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
                    className="group"
                    onClick={() => AddToRecentlyViewed(product.id)}
                    key={key}
                  >
                    <div className="h-44">
                      <img
                        src={`${product.image}`}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </div>
                    <p className="text-15 whitespace-nowrap overflow-hidden max-w-[80%] mx-auto overflow-ellipsis text-center group-hover:text-blue-600 duration-300 mt-3">
                      {product.name}
                    </p>
                    <p className="text-center font-semibold duration-300 text-15">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
