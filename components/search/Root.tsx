"use client";
import { Search, X } from "lucide-react";
import Products from "./Products";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { framer } from "@/lib/framer";
import { SearchProducts } from "@/actions/product/SearchProducts";

type TProduct = {
  name: string,
  id: string 
  image:string 
  price: number
}

export default function Root() {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState<TProduct[]>([]);
  const [allProducts, setAllProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(false);

  
  const getAllProducts = async () => {
    const data: TProduct[] = await SearchProducts() 
    setAllProducts(data)
  };


  const searchProduct = () => {
    const filteredProducts = allProducts.filter(el => el.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    setProducts(filteredProducts)
  }

  useEffect(() => {
    searchProduct()
  }, [input])

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <motion.div
      variants={framer}
      initial="initial"
      animate="animate"
      className="mb-40"
    >
      <div className="h-44 linear px-5 justify-center flex items-end">
        <div className="h-16 rounded-md overflow-hidden shadow-md stroke-black bg-white w-full sm:w-[750px] relative translate-y-8">
          <input
            type="text"
            onFocus={getAllProducts}
            className="h-full outline-none text-15 pl-12 text-black placeholder:text-black w-full "
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Search
            size={18}
            className="absolute pointer-events-none top-1/2 -translate-y-1/2 left-3"
          />
          <X
            size={18}
            onClick={() => setInput('')}
            className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-3"
          />
        </div>
      </div>
      <p className={`text-center mt-12 font-semibold text-2xl capitalize duration-500 ${input.length > 2 ? 'opacity-100 visible translate-y-0': 'opacity-0 invisible translate-y-5'}`}>{input || 'Search'}</p>
      <p className={`${input.length > 2 ? 'opacity-100 visible translate-y-0': 'translate-y-5 opacity-0 invisible'} mb-12 text-center duration-500`}>{products.length === 0 && input.length > 2 ? `No result for ${input}` : `${products.length} ${products.length > 1 ? 'results' : 'result'} found` }</p>
      <Products input={input} products={products} loading={loading} />
    </motion.div>
  );
}
