"use server";

import { ConnectDB } from "@/config/connectDB";
import { Cart } from "@/models/Cart";
import { revalidatePath } from "next/cache";
import { GetSession } from "../auth/GetSession";
import { JwtPayload } from "jsonwebtoken";

type TData = {
  uniqueId: string;
};
export const RemoveItemFromCart = async ({ uniqueId }: TData) => {
  ConnectDB();
  const session = await GetSession() as JwtPayload;
  
  const userId = session?.id;
  try {
    await Cart.findOneAndDelete({ userId, uniqueId });
    revalidatePath("/cart");
  } catch (error) {
    return {
      ok: false,
      message: "Something went wrong",
    };
  }
};
