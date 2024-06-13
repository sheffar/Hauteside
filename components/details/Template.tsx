"use client";
import { AddToRecentlyViewed } from "@/actions/product/AddToRecentlyViewed";
import { TSimilarAndRecentlyViewedProduct } from "@/actions/product/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: TSimilarAndRecentlyViewedProduct[];
  title: string;
};

export default function Template({ title, products }: Props) {
  const addToRecentlyViewed = async (productId: string) => {
    await AddToRecentlyViewed(productId);
  };

  return (
    <div className="">
      {products.length > 0 && (
        <div className="container">
          <div className="flex items-center mb-10 gap-5 md:gap-7">
            <div className="h-[2px] flex-1 bg-gray-300"></div>
            <p className="text-xl md:text-2xl font-semibold ">
              {title}
            </p>
            <div className="h-[2px] flex-1 bg-gray-300"></div>
          </div>

          <div className="grid auto-cols-[60%] snap-mandatory snap-x sm:auto-cols-[45%] md:auto-cols-[40%] lg:auto-cols-auto overflow-x-auto grid-flow-col  lg:grid-cols-5 gap-5">
            {products.map((product, key) => (
              <Link
                href={`/details/${product.id}`}
                onClick={() => addToRecentlyViewed(product.id)}
                className="cursor-pointer flex flex-col items-center justify-center text-center snap-start"
                key={key}
              >
                <div className="h-64 group bg-white md:h-56 rounded-md overflow-hidden">
                  <Image
                    src={`${product.image}`}
                    alt=""
                    unoptimized
                    height={0}
                    width={0}
                    className="object-contain duration-300 w-full h-full  "
                  />
                </div>
                <p className="text-sm max-w-full overflow-ellipsis overflow-hidden whitespace-nowrap font-semibold group-hover:text-blue-600 duration-300 mt-2">
                  {product.name}
                </p>
                <p className="font-semibold mt-1 text-orange-600 text-15">
                  N{product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
