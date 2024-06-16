"use client";
import Delivery from "./Delivery";
import Images from "./Images";
import {
  TProduct,
  TSimilarAndRecentlyViewedProduct,
} from "@/actions/product/types";
import Main from "./Main";
import Template from "./Template";
import { useEffect, useState, useTransition } from "react";
import { AddToCart } from "@/actions/cart/AddToCart";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { framer } from "../../lib/framer";
import { useCookies } from "react-cookie";

type Props = {
  product: TProduct;
  similarProducts: TSimilarAndRecentlyViewedProduct[];
  recentlyViewedProducts: TSimilarAndRecentlyViewedProduct[];
  userId: string;
};

export default function Root({
  product,
  similarProducts,
  recentlyViewedProducts,
  userId,
}: Props) {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [quantity, setQuantity] = useState("1");
  const [isPending, startTransition] = useTransition();

  const [cookies, setCookie, removeCookie] = useCookies(["url"]);
  const pathname = usePathname();

  const addToCart = () => {
    const newPathname = pathname.slice(1, pathname.length)
    if (!userId) {
      removeCookie('url', {path: '/details'})
      removeCookie('url', {path: '/auth'})
      setCookie("url", `${newPathname}`);
      return router.push("/auth/login");
    }
    startTransition(async () => {
      if (!isPending) {
        await AddToCart({
          quantity: parseInt(quantity),
          productId: product.id,
          size: product.sizes[active],
        });
      }
    });
  };


  
  
  
 

  return (
    <motion.div
      variants={framer}
      animate="animate"
      initial="initial"
      className="bg-white mb-28 md:bg-gray-50 pt-[85px] pb-4 md:pb-0"
    >
      <div className="container">
        <div className="grid min-h-96 gap-4 grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div className="bg-white md:p-3 md:shadow-md rounded-lg grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-7">
            <div className="">
              <Images images={product.images} />
            </div>
            <div className="">
              <Main product={product} setActive={setActive} active={active} />
            </div>
          </div>
          <div className="">
            <Delivery
              quantity={quantity}
              setQuantity={setQuantity}
              stock={product.stock}
              price={product.discountPrice}
              addToCart={addToCart}
              isPending={isPending}
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-16 mt-10">
        <Template title="Similar Products" products={similarProducts} />
        <div className="h-10"></div>
        <Template title="Recently Viewed" products={recentlyViewedProducts} />
      </div>
    </motion.div>
  );
}
