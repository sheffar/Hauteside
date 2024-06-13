"use server";

import { Recent } from "@/models/Recent";
import { cookies } from "next/headers";

export const FetchRecentlyViewedProducts = async (productId: string) => {
  const userId = cookies().get("userId")?.value;
  const CartItem = await Recent.find({ userId, productId: { $ne: productId } })
    .populate("productId")
    .sort({ _id: -1 })
    .limit(5);
  const Products = CartItem.map((el) => {
    return {
      name: el.productId.name,
      id: el.productId._id.toString(),
      image: el.productId.images[0],
      price: el.productId.discountPrice,
    };
  });
  return Products;
};
