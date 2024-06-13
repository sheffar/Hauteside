"use client";
import { Logout } from "@/actions/auth/Logout";
import { TSumAndQuantity } from "@/actions/cart/type";
import { Divide as Hamburger } from "hamburger-react";

import {
  BellDotIcon,
  CirclePower,
  Cuboid,
  Search,
  ShoppingCart,
  User,
  User2,
} from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  sumQty: TSumAndQuantity;
  fullname: string;
  setOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  color: string
};

export default function Icons({ sumQty,color, fullname, setOpen, isOpen }: Props) {

  const logout = async () => {
    setOpen(false);
    await Logout();
  };
  const links = ["home", "about", "search", "contact", "shop", "new arrival"];
  const links2 = ["profile", "notification", "orders"];
  return (
    <div>
      <div
        className={`h-[calc(100vh-70px)] md:hidden duration-500 top-[70px] bg-white fixed left-0 w-full ${
          isOpen
            ? "scale-100 opacity-100 visible"
            : "scale-150 invisible opacity-0"
        }`}
      >
        <div className="h-full w-full py-5 relative">
          <div className="flex flex-col gap-5 text-black pl-4 justify-center uppercase font-bold ">
            {links.map((link, key) => (
              <Link
                href={`${link}`}
                key={key}
                onClick={() => setOpen(false)}
                className="duration-300 hover:text-[red]"
              >
                {link}
              </Link>
            ))}
          </div>
          {fullname && (
            <div className="flex flex-col gap-5 text-black pl-4 justify-center uppercase font-bold mt-12">
              {links2.map((link, key) => (
                <Link
                  href={`${link}`}
                  key={key}
                  onClick={() => setOpen(false)}
                  className="duration-300 hover:text-[red]"
                >
                  {link}
                </Link>
              ))}
            </div>
          )}
          <div className="">
            {fullname ? (
              <button
                onClick={logout}
                className="flex h-16 rounded-md shadow-md px-2 text-sm duration-300 w-[90%] cursor-pointer absolute bottom-5 -translate-x-1/2 left-1/2 justify-center text-[red] border-2 border-[red] items-center gap-2 active:scale-90"
              >
                <CirclePower size={16} />
                <p className="text-15 uppercase font-semibold">Logout</p>
              </button>
            ) : (
              <Link
                href={"/auth/login"}
                onClick={() => setOpen(false)}
                className="flex h-16 rounded-md shadow-md px-2 text-sm duration-300 w-[90%] cursor-pointer absolute bottom-5 -translate-x-1/2 left-1/2 justify-center text-[green] border-2 border-[green] items-center gap-2 active:scale-90"
              >
                <User size={17} />
                <p className="text-15 uppercase font-semibold">
                  Login / Signup
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 items-center">
        <Link href={"/cart"} onClick={() => setOpen(false)} className="relative">
          <ShoppingCart size={19} />
          {sumQty.qty > 0 && (
            <p className="absolute -top-3 border-2 border-white -right-3 text-10 text-white flex items-center justify-center h-5 w-5 rounded-full bg-red-600">
              {sumQty.qty}
            </p>
          )}
        </Link>
        <Link href={"/search"} className="hidden cursor-pointer md:block">
          <Search size={21} />
        </Link>
        {!fullname ? (
          <Link className="hidden md:block" href={"/auth/login"}>
            <User size={23} />
          </Link>
        ) : (
          <div style={{backgroundColor: `${color !== undefined ? `${color}`: 'black'}`}} className="h-8 w-8 hidden md:flex relative border-2 cursor-pointer font-semibold capitalize text-base items-center group justify-center rounded-full">
            {fullname.slice(0, 1)}
            <div className="w-40 group-hover:opacity-100 duration-500 group-hover:visible opacity-0 invisible absolute top-full right-0">
              <div className="h-4"></div>
              <div className="h-fit py-1 bg-black/50 shadow-md border-white backdrop-blur-md">
                <div className="flex h-9 px-2 duration-300 cursor-pointer hover:bg-blue-900 items-center gap-2 ">
                  <User2 size={17} />
                  <p>My Profile</p>
                </div>
                <div className="flex h-9 px-2 duration-300 cursor-pointer hover:bg-blue-900 items-center gap-2 ">
                  <Cuboid size={17} />
                  <p>Orders</p>
                </div>
                <div className="flex h-9 px-2 duration-300 cursor-pointer hover:bg-blue-900 items-center gap-2 ">
                  <BellDotIcon size={17} />
                  <p>Notification</p>
                </div>
                <div
                  onClick={logout}
                  className="flex h-9 px-2 duration-300 cursor-pointer hover:bg-[red] items-center gap-2 "
                >
                  <CirclePower size={17} />
                  <p>Logout</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="md:hidden">
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
}
