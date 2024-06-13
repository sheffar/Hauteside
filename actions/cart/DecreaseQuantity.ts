"use server";

import { ConnectDB } from "@/config/connectDB";
import { revalidatePath } from "next/cache";
import { GetSession } from "../auth/GetSession";
import { Cart } from "@/models/Cart";
import { GetUserId } from "../user/GetUserInfo";

type TData = {
  uniqueId: string;
};
export const DecreaseQtyInCart = async ({ uniqueId }: TData) => {
  ConnectDB();
  const userId = await GetUserId();
  const CartItem = await Cart.findOne({ userId, uniqueId });
  try {
    if (!CartItem) {
      throw "This item is not in your cart ";
    }
  } catch (error) {
    return error;
  }

  CartItem.quantity = CartItem.quantity > 1 ? CartItem.quantity - 1 : 1;
  try {
    await CartItem.save();
    revalidatePath("/");
  } catch (error) {
    return "Something went wrong";
  }
};
