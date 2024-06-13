"use server";

import { Recent } from "@/models/Recent";
import { cookies } from "next/headers";
import { v4 as random } from "uuid";

export const AddToRecentlyViewed = async (productId: string) => {
  let userId = cookies().get("userId")?.value;
  if (!userId) {
    userId = random().toString();
    cookies().set("userId", userId);
  }
  const CartItem = await Recent.find({ userId, productId });
  if (CartItem.length === 0) {
    try {
      await Recent.create({ userId, productId });
      return CartItem;
    } catch (error) {
      return error;
    }
  }
  if (CartItem.length === 1) {
    await Recent.deleteOne({ userId, productId });
    try {
      await Recent.create({ userId, productId });
      return CartItem;
    } catch (error) {
      return error;
    }
  }
  if (CartItem.length > 1) {
    await Recent.deleteMany({ userId, productId });
    try {
      await Recent.create({ userId, productId });
      return CartItem;
    } catch (error) {
      return error;
    }
  }
};
