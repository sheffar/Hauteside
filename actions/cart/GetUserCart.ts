import { ConnectDB } from "@/config/connectDB";
import { Cart } from "@/models/Cart";
import { GetUserId } from "../user/GetUserInfo";

export const GetUserCart = async () => {
  ConnectDB();
  try {
    const userId = await GetUserId();
    const CartItems = await Cart.find({ userId }).populate("productId");
    const newCart = CartItems.map((item) => {
      return {
        productId: item.productId._id.toString(),
        uniqueId: item.uniqueId,
        quantity: item.quantity,
        size: item.size,
        name: item.productId.name,
        price: item.productId.discountPrice,
        image: item.productId.images[0],
      };
    });
    return newCart;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
