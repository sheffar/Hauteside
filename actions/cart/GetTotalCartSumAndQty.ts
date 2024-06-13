"use server";

import { Cart } from "@/models/Cart";
import { GetUserId } from "../user/GetUserInfo";

export const GetTotalCartSumAndQty = async () => {
  const userId = await GetUserId();
  const CartItems = await Cart.find({ userId }).populate('productId');
  let sumQty = {
    sum: 0,
    qty: 0,
  }
  CartItems.map((el) => {
    sumQty = {
      sum: sumQty.sum += el.productId.discountPrice * el.quantity,
      qty: sumQty.qty += el.quantity,
    };
  });

  return sumQty
};
