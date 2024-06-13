"use client";
import { DecreaseQtyInCart } from "@/actions/cart/DecreaseQuantity";
import { IncreaseQtyInCart } from "@/actions/cart/IncreaseQtyInCart";
import { RemoveItemFromCart } from "@/actions/cart/RemoveItem";
import { BiMinus, BiPlus } from "react-icons/bi";
import { TUserCart } from "@/actions/cart/type";
import { useState } from "react";
import { Trash } from "lucide-react";
import Link from "next/link";
import { AddToRecentlyViewed } from "@/actions/product/AddToRecentlyViewed";

type Props = {
  product: TUserCart;
  key: number;
};

export default function ProductCard({ product, key }: Props) {
  const { uniqueId, productId, image, name, size, price, quantity } = product;
  const [loading, setLoading] = useState(-1);

  const increaseQty = async () => {
    if (loading === -1) {
      setLoading(key);
      await IncreaseQtyInCart({ uniqueId, productId });
      setLoading(-1);
    }
  };
  const decreaseQty = async () => {
    if (loading === -1) {
      setLoading(key);
      await DecreaseQtyInCart({ uniqueId });
      setLoading(-1);
    }
  };
  const removeItem = async () => {
    await RemoveItemFromCart({ uniqueId });
  };

  const addToRecentlyViewed = async (productId: string) => {
    await AddToRecentlyViewed(productId)
  }

  return (
    <div className="grid bg-white shadow grid-cols-1 md:grid-cols-2 gap-3 border rounded-md p-3">
      <div className="flex items-center gap-3">
        <div className="">
          <div className="h-24 w-24 rounded-md">
            <img
              src={`${image}`}
              className="object-contain h-full w-full"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="w-[200px] md:w-[250px] overflow-hidden whitespace-nowrap overflow-ellipsis">
            <Link onClick={() => addToRecentlyViewed(product.productId)} href={`/details/${product.productId}`} className="font-semibold cursor-pointer hover:text-blue-600 duration-300 text-sm mb-1">
              {name}
            </Link>
            <p className="text-13 text-gray-500 uppercase ">{size}</p>
          </div>
          <p className="font-semibold md:hidden text-base">
            ₦{price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex text-sm font-semibold noSelect items-center gap-2">
          <div
            onClick={decreaseQty}
            className="h-6 w-6 hover:border-[red] duration-300 active:scale-90 cursor-pointer rounded-full flex items-center justify-center border border-gray-500"
          >
            <BiMinus />
          </div>
          <div className="h-6 w-8 flex items-center justify-center">
            {key !== loading ? (
              <p className="px-3 duration-300 text-sm">{quantity}</p>
            ) : (
              <span className="loader3"></span>
            )}
          </div>
          <div
            onClick={increaseQty}
            className="h-6 w-6 hover:border-[green] duration-300 active:scale-90 cursor-pointer rounded-full flex items-center justify-center border border-gray-500"
          >
            <BiPlus />
          </div>
        </div>
        <p className="font-bold hidden md:block text-sm">
          ₦{price.toLocaleString()}
        </p>
        <Trash
          size={17}
          className="hover:text-[red] duration-300 cursor-pointer"
          onClick={removeItem}
        />
      </div>
    </div>
  );
}
