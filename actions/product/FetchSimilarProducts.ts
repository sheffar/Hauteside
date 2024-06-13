import { Product } from "@/models/Product";

export const FetchSimilarProducts = async (productId: string) => {
  const similarProducts = await Product.find({ _id: { $ne: productId } }).limit(
    5
  );
  const Products = similarProducts.map((el) => {
    return {
      name: el.name,
      id: el._id.toString(),
      price: el.discountPrice,
      image: el.images[0],
    };
  });
  return Products;
};

