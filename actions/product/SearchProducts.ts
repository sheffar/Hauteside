"use server";

import { ConnectDB } from "@/config/connectDB";
import { Product } from "@/models/Product";

type TProduct = {
  name: string,
  id: string 
  image:string 
  price: number
}

export const SearchProducts = async () => {
    ConnectDB();
    const productss = await Product.find({
      name: { $regex: '', $options: "i" },
    });
    const products: TProduct[] = productss.map((product) => {
      return {
        name: product.name,
        id: product._id.toString(),
        image: product.images[0],
        price: product.discountPrice,
      };
    });
    return products;
};
