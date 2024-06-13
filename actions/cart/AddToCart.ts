"use server";

import { ConnectDB } from "@/config/connectDB";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { Cart } from "@/models/Cart";
import { revalidatePath } from "next/cache";
import { GetUserId } from "../user/GetUserInfo";

type TData = {
  quantity: number;
  productId: string;
  size: string;
};

export const AddToCart = async ({ quantity, productId, size }: TData) => {
  ConnectDB();
  const userId = await GetUserId();
  const uniqueId = `${productId}-${size}`;
  const ProductItem = await Product.findById(productId);
  const Client = await User.findById(userId);
  try {
    if (!Client) {
      throw "Sorry you need to login to continue";
    }
  } catch (error) {
    return error;
  }
  try {
    if (!ProductItem) {
      throw "Sorry this product doesn't exist";
    }
  } catch (error) {
    return error;
  }

  const CartItem = await Cart.findOne({ userId, uniqueId });
  if (!CartItem) {
    try {
      await Cart.create({
        userId,
        productId,
        uniqueId,
        quantity,
        size,
      });
      revalidatePath("/cart");
    } catch (error) {
      return "Something went wrong";
    }
  } else {
    CartItem.quantity =
      ProductItem.stock > CartItem.quantity + quantity
        ? CartItem.quantity + quantity
        : CartItem.quantity;
    try {
      await CartItem.save();
      revalidatePath("/");
      return "Product added successfully";
    } catch (error) {
      return "Something went wrong";
    }
  }
};
