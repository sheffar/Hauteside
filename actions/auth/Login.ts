"use server";
import { ConnectDB } from "@/config/connectDB";
import { passwordMatch, signJWTToken } from "@/lib/helpers";
import { User } from "@/models/User";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type TFormData = {
  email: string;
  password: string;
};

export const Login = async (email: string, password: string) => {
  ConnectDB();
  try {
    if (email.trim().length < 1 || password.trim().length < 1) {
      throw {
        error: {
          email: email.trim().length > 0 ? "" : "Please input your email",
          password:
            password.trim().length > 0 ? "" : "Please input your password",
          other: "",
        },
      };
    }
  } catch (error) {
    return error;
  }

  const Client = await User.findOne({ email: email.toLowerCase() });

  try {
    if (!Client) {
      throw {
        error: {
          email: "User don't exist, please create an account",
          password: "",
          other: "",
        },
      };
    }
  } catch (error) {
    return error;
  }
  try {
    if (!passwordMatch(password, Client.password)) {
      throw {
        error: {
          email: "",
          password: "Incorrect password",
          other: "",
        },
      };
    }
  } catch (error) {
    return error;
  }

  const token = signJWTToken(Client._id);

  cookies().set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 2592000,
  });
  return {
    token,
  };
  
};
