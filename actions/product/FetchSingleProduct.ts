"use server";

import { ConnectDB } from "@/config/connectDB";
import { Product } from "@/models/Product";

export const FetchSingleProduct = async (productId: string) => {
  ConnectDB();
  const ProductItem = await Product.findById(productId);
  const newProductItem = {
    id: ProductItem._id.toString(),
    name: ProductItem.name,
    stock: ProductItem.stock,
    sizes: ProductItem.sizes,
    details: ProductItem.details,
    images: ProductItem.images,
    visible: ProductItem.visible,
    actualPrice: ProductItem.actualPrice,
    discountPrice: ProductItem.discountPrice,
  };

  try {
    if (!ProductItem) {
      throw "Couldn't find product";
    }
  } catch (error) {
    return error;
  }
  return newProductItem;
};
