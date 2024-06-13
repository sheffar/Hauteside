import mongoose, { Document, Schema } from "mongoose";
import { User } from "./User";
import { Product } from "./Product";

type TOrder = Document & {
  userID: mongoose.Schema.Types.ObjectId;
  product: [
    {
      id: mongoose.Schema.Types.ObjectId;
      quantity: number;
      price: number;
      size: string;
      color?: string;
      image: string;
      name: string;
    }
  ];
  paymentStatus: string;
  deliveryStatus: string;
  deliveryDate: Date;
  shipping: {
    address: string;
    location: string;
    phone: string;
    email: string;
  };
  totalQuantity: number;
  totalPrice: number;
};

const OrderSchema: Schema<TOrder> = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
    product: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: Product,
        },
        name: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
        color: String,
        image: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    shipping: {
      address: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    deliveryStatus: {
      type: String,
      required: true,
    },
    deliveryDate: {
      type: Date,
      required: true,
    },
    totalQuantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Order =
  mongoose.models.Order || mongoose.model<TOrder>("Order", OrderSchema);
