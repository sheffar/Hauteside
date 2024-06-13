'use client'
import { framer7 } from '@/lib/framer';
import { motion } from 'framer-motion'
import { Send, Smile } from "lucide-react";
import React from "react";

export default function NewsLetter() {
  return (
    <motion.div
      variants={framer7}
      initial="initial"
      whileInView="animate"
      className="flex bg-white py-14 sm:py-24 lg:py-28 xl:py-32 items-center justify-center"
    >
      <div className="container flex items-center justify-center">
        <div className="w-full lg:w-[800px] md:p-5 flex flex-col justify-center bg-[#f7f344] gap-3 items-center text-center rounded-xl md:shadow-md h-72">
          <div className="flex items-center gap-3 md:gap-7">
            <p className="text-xl md:text-2xl font-bold">STAY UPDATED</p>
            <Send size={40} className="hidden md:block" />
            <Send size={30} className="md:hidden " />
          </div>
          <div className="">
            <p className="md:w-96">
              Stay updated with the best services and special packages. Don't
              miss out on anyhting, from new packages to promos and discount.
            </p>
          </div>
          <p className="font-semibold text-base ">
            Subscribe to our Newsletter!
          </p>

          <div className="h-14 mt-5 w-full flex items-center gap-3">
            <Smile size={40} className="hidden md:block" />
            <input
              type="text"
              placeholder="Your email"
              className="h-full placeholder:text-black outline-none border-2 pl-3 rounded-md bg-transparent border-black flex-1"
            />
            <button className="duration-300 px-5 h-14 rounded-md bg-black text-white font-semibold cursor-pointer active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
