import { GetTotalCartSumAndQty } from "@/actions/cart/GetTotalCartSumAndQty";
import { GetUserCart } from "@/actions/cart/GetUserCart";
import { TUserCart } from "@/actions/cart/type";
import Root from "@/components/cart/Root";
import { ShoppingCart } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cart",
  description: "",
};
export default async function CartPage() {
  
  const products = (await GetUserCart()) as TUserCart[];
  const totalSumAndQuantity = await GetTotalCartSumAndQty();

  return (
    <div>
      {products?.length > 0 ? (
        <Root products={products} totalSumAndQuantity={totalSumAndQuantity} />
      ) : (
        <div className="h-screen flex items-center flex-col justify-center text-2xl">
          <ShoppingCart size={50} className="mb-5" />
          <p>Your Cart is Empty</p>
          <Link href={'/'} className="px-10 py-4 text-white shadow-md rounded-sm duration-500 active:scale-90 bg-blue-600 font-semibold text-sm mt-5 ">Shop Now</Link>
        </div>
      )}
    </div>
  );
}
