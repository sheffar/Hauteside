"use server";

import { GetSession } from "../auth/GetSession";
import { ConnectDB } from "@/config/connectDB";
import { User } from "@/models/User";
import { JwtPayload } from "jsonwebtoken";

export const GetUserId = async () => {
  ConnectDB()
  const data = await GetSession() as JwtPayload;
  return data?.id;
};


export const GetUserEmail = async () => {
  ConnectDB()
  const id = await GetUserId();
  const Client = await User.findById(id)
  return Client?.email;
};

export const GetUserFullname = async () => {
  ConnectDB()
  const id = await GetUserId();
  const Client = await User.findById(id)
  return Client?.fullname;
};

export const GetUserColor = async () => {
  ConnectDB()
  const id = await GetUserId();
  const Client = await User.findById(id)
  return Client?.color;
};
