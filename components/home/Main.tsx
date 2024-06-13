import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex z-10 relative justify-center">
      <div className="container grid grid-cols-1 md:grid-cols-[1fr_1.25fr]">
        <div className="text-white flex flex-col items-center md:text-start md:items-start text-center">
          <p className="text-[33px] md:text-[40px]">
            Elevate Your Style, Embrace the Extraordinary
          </p>
          <div className="px-10 md:px-0">
            <p className="my-4 sm:hidden text-sm">
              Explore our curated collection of elevated designs that empower
              your unique style & boost your confidence.
            </p>
            <p className="my-4 hidden sm:block text-sm tracking-wide">
              At Hauteside, we believe fashion is more than just clothing - it's
              a reflection of your unique personality & a canvas for
              self-expression. Explore our curated collection of high-quality & innovative designs.
            </p>
          </div>
          <div className="flex gap-6 mt-7">
            <Link href={'/shop'} className="w-40 h-14 duration-300 active:scale-95 hover:scale-105 flex items-center gap-3 justify-center bg-black/50 backdrop-blur-lg border-2 border-white shadow-md">
            <ShoppingBag size={16}/>
              Shop Now
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}
