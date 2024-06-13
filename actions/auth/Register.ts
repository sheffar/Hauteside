"use server";
import { ConnectDB } from "@/config/connectDB";
import { hashPassword, signJWTToken } from "@/lib/helpers";
import { User } from "@/models/User";
import { cookies } from "next/headers";
import { hexCodes } from "./data";

type TFormData = {
  fullname: string;
  password: string;
  email: string;
};

export const Register = async (formData: TFormData) => {
  ConnectDB();
  const { fullname, email, password } = formData;
  try {
    if (!fullname || !email || !password) {
      throw {
        error: {
          fullname: fullname ? "" : "Please input your fullname",
          password: password ? "" : "Please input your password",
          email: email ? "" : "Please input your email",
        },
      };
    }
  } catch (error) {
    return error;
  }
  const Client = await User.findOne({ email });

  try {
    if (Client) {
      throw {
        error: {
          fullname: "",
          password: "",
          email: "Sorry user already exist",
        },
      };
    }
  } catch (error) {
    return error;
  }

  const randomIndex = Math.floor(Math.random() * 10)
  const color = hexCodes[randomIndex]
const passwordHashed= hashPassword(password)
  const NewClient = await User.create({
    fullname: fullname.toLowerCase(),
    email: email.toLowerCase(),
    password: passwordHashed,
    color,
  });
  const token = signJWTToken(NewClient._id);

  cookies().set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 2592000,
  });

  return { token };
};
