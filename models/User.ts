import mongoose, { Document, Schema } from "mongoose";

type TUser = Document & {
  fullname: string;
  email: string;
  phone?: string;
  password: string;
  color: string
  residence?: {
    address: string;
    location: string;
  };
};

const UserSchema: Schema<TUser> = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please fill in your fullname"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please fill in your email"],
  },
  phone: String,
  password: {
    type: String,
    required: [true, "Please fill in your password"],
  },
  residence: {
    address: String,
    location: String,
  },
  color: String
});

export const User =
  mongoose.models.User || mongoose.model<TUser>("User", UserSchema);
