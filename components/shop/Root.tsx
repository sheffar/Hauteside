"use client";
import { framer, framer2 } from "@/lib/framer";
import { AnimatePresence, motion } from "framer-motion";
import Products from "./Products";
import { useEffect, useState } from "react";
import { FilterAndSortProducts } from "@/actions/product/FilterAndSortProducts";

type TProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  actualPrice: number;
};

export default function Root() {
  const [sort, setSort] = useState("createdAt -1");
  const [max, setMax] = useState(100000);
  const [min, setMin] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<TProduct[]>([]);

  const change1 = async (e: any) => {
    setSort(e.target.value);
  };

  const changeMax = async (e: any) => {
    setMax(e.target.value);
  };

  const fetchProducts = async () => {
    setLoading(true);
    const products = await FilterAndSortProducts({
      min,
      max,
      sort,
    });
    setProducts(products);
    setLoading(false);
  };
  const changeMin = async (e: any) => {
    setMin(e.target.value);
  };

  const fetchAllProductsOnRender = async () => {
    const products = await FilterAndSortProducts({
      min: 100,
      max: 1000000,
      sort,
    });
    setProducts(products);
  };

  useEffect(() => {
    fetchAllProductsOnRender();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [max, min, sort]);

  return (
    <motion.div
      variants={framer}
      initial="initial"
      animate="animate"
      className="container mt-[85px]"
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg md:text-2xl">All Product</p>
        <div className="flex font-semibold items-center gap-3 md:gap-6">
          <p>Sort by:</p>
          <div className="flex h-12 px-3 border-2 items-center font-semibold cursor-pointer text-sm gap-2 relative">
            <select
              name=""
              value={sort}
              onChange={change1}
              className="outline-none cursor-pointer bg-white border-none h-full w-full "
            >
              <option value="createdAt  -1">Newest Arrival</option>
              <option value="discountPrice =1">Highest to Lowest</option>
              <option value="discountPrice 1">Lowest to Highest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid mt-5 gap-10 md:grid-cols-[150px_1fr]">
        <div className="grid h-fit grid-cols-2 md:grid-cols-1 gap-10">
          <div className="">
            <p className="font-semibold">Min Price</p>
            <div className="h-11 md:h-12">
              <input
                type="number"
                value={min}
                onChange={changeMin}
                className="bg-white h-full w-full px-2 text-black font-semibold outline-none border-2 border-gray-700"
              />
            </div>
          </div>
          <div className="">
            <p className="font-semibold">Max Price</p>
            <div className="h-11 md:h-12">
              <input
                type="number"
                value={max}
                onChange={changeMax}
                className="bg-white h-full w-full px-2 text-black font-semibold outline-none border-2 border-gray-700"
              />
            </div>
          </div>
        </div>
        <div className="">
          {loading ? (
            <div className="h-96 w-full flex items-center justify-center">
              <span className="loader4"></span>
            </div>
          ) : (
            <Products products={products} loading={loading} />
          )}
        </div>
      </div>
    </motion.div>
  );
}
