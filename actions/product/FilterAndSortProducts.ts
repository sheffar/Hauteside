"use server";

import { ConnectDB } from "@/config/connectDB";
import { Product } from "@/models/Product";


type TProduct = {
    id: string;
    name: string;
    image: string;
    price: number;
    actualPrice: number;
  };

export const FilterAndSortProducts = async (data: any): Promise<TProduct[]> => {
  ConnectDB();
  const key = data.sort.split(" ")[0];
  const direction = data.sort.split(" ")[1] === "1" ? 1 : -1;
  const max = data.max || 200000;
  const min = data.min || 0;
  let products = [];
  if (key === "createdAt") {
    products = await Product.find({
      discountPrice: { $lte: max, $gt: min },
    }).sort({ createdAt: -1 });
  } else {
    products = await Product.find({
      discountPrice: { $lte: max, $gt: min },
    }).sort({ discountPrice: direction });
  }

  const newProducts: TProduct[] = products.map((product) => {
    return {
      id: product._id.toString(),
      name: product.name,
      image: product.images[0],
      price: product.discountPrice,
      actualPrice: product.actualPrice,
    };
  });

  return newProducts;
};
