"use server";
import { ConnectDB } from "@/config/connectDB";
import { Product } from "@/models/Product";

export const FetchAllProducts = async () => {
  ConnectDB();
  const products = await Product.find().sort({_id: -1});
  const newProducts = products.map((product) => {
    return {
      id: product._id.toString(),
      name: product.name,
      stock: product.stock,
      sizes: product.sizes,
      images: product.images,
      visible: product.visible,
      details: product.details,
      discountPrice: product.discountPrice,
      actualPrice: product.actualPrice,
    };

    
  });
  return newProducts;
};

