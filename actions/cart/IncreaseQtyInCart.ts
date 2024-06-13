"use server";
import { ConnectDB } from "@/config/connectDB";
import { revalidatePath } from "next/cache";
import { Cart } from "@/models/Cart";
import { Product } from "@/models/Product";
import { GetUserId } from "../user/GetUserInfo";

type TData = {
  uniqueId: string;
  productId: string;
};

export const IncreaseQtyInCart = async ({ uniqueId, productId }: TData) => {
  ConnectDB();
  const userId = await GetUserId();
  const CartItem = await Cart.findOne({ uniqueId, userId });
  try {
    if (!CartItem) {
      throw "Sorry product's not in your cart";
    }
  } catch (error) {
    return error;
  }
  const ProductItem = await Product.findById(productId);

  CartItem.quantity =
    ProductItem.stock > CartItem.quantity
      ? CartItem.quantity + 1
      : CartItem.quantity;
  try {
    await CartItem.save();
    revalidatePath("/cart");
  } catch (error) {
    return "Something went wrong";
  }
};
