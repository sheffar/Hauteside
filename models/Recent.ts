import mongoose, { Document } from "mongoose";
import { User } from "./User";
import { Product } from "./Product";
import { Schema } from "mongoose";

type TRecent = Document & {
  userId: string 
  productId: mongoose.Schema.Types.ObjectId
}

const RecentSchema: Schema<TRecent> = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product,
    },
  },
  {
    timestamps: true,
  }
);

export const Recent =
  mongoose.models.Recent || mongoose.model<TRecent>("Recent", RecentSchema);
