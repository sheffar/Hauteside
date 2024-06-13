import mongoose, { Document, Schema } from "mongoose";

type TProduct = Document & {
  name: string;
  actualPrice: number;
  discountPrice: number;
  stock: number;
  sizes: string[];
  details: string;
  images: string[]
  visible: boolean
};


const ProductSchema: Schema<TProduct> = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "Please fill in product name"],
    },
    actualPrice: {
      type: Number,
      required: [true, "Please fill in product's  actual price"],
    },
    discountPrice: {
      type: Number,
      required: [true, "Please fill in product's  discount price"],
    },
    stock: {
      type: Number,
      required: [true, "Please fill in product stock"],
    },
    sizes: {
      type: [String],
      required: [true, "Please fill in product sizes"],
    },
    details: {
      type: String,
      required: [true, "Please fill in product details"],
    },
    images: {
      type: [String],
      required: [true, "Please fill in product images"],
    },
    visible: {
      type: Boolean,
      default: false
    }
});


export const Product = mongoose.models.Product || mongoose.model<TProduct>("Product", ProductSchema);
