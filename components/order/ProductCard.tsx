import { Trash } from "lucide-react";
import Link from "next/link";

export default function ProductCard() {
  return (
    <Link
      href={"/orders/id"}
      className="grid grid-cols-1 border-2 rounded-md p-2 sm:grid-cols-[auto_1fr] gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="h-20 w-20 border-2 rounded-md"></div>
        <div className="sm:hidden">
          <p className="text-sm mb-1 hover:text-blue-500 duration-300 font-semibold">WebKrooner Hautside Shirt</p>
          <p className="text-xs">Cloth</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:gap-0 sm:grid-cols-2 justify-between items-center">
        <div className="hidden sm:block">
          <p className="text-15 mb-1 w-fit hover:text-blue-500 duration-300 font-semibold">
            WebKrooner Hautside Shirt
          </p>
          <p className="text-xs">Cloth</p>
        </div>
        <div className="flex text-13 font-semibold justify-between items-center">
          <p className="sm:px-4 py-2 sm:border rounded-full border-gray-400">
            $1500 <span className="text-xs">X</span> 4
          </p>
          <p className="font-bold">$6000</p>
          <Trash
            className="duration-300 hover:text-[red] cursor-pointer"
            size={17}
          />
        </div>
      </div>
    </Link>
  );
}
