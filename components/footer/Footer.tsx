"use client";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { framer } from "@/lib/framer";
export default function Footer() {
  const links = [
    "Privacy",
    "Terms of Use",
    "Acceptable Use Policy",
    "Software Lifecycle Policy",
  ];
  const socials = [
    <Facebook size={15} />,
    <Instagram size={15} />,
    <Twitter size={15} />,
    <Linkedin size={15} />,
  ];

  return (
    <motion.div
      variants={framer}
      initial="initial"
      animate="animate"
      className="bg-[#000000] mt-20 text-white pt-20"
    >
      <div className="container border-white pb-10 flex text-center justify-center items-center flex-col">
        <Link href={"/"}>
          <img src="/logo.png" className="h-20" alt="" />
        </Link>
        <div className="w-full md:w-[600px] text-13 leading-loose mt-10">
          <p>
            Welcome to the world of Hautside, where style meets substance. As a
            leading online fashion destination, we curate a carefully selected
            collection of designer apparel, accessories, and footwear that
            embody the essence of contemporary haute couture.
          </p>
        </div>
        <div className="flex gap-4 md:gap-7 mt-5">
          {socials.map((social, key) => (
            <div
              key={key}
              className="h-8 w-8 rounded-full flex items-center justify-center border-2 text-white cursor-pointer hover:text-[red] hover:border-[red] duration-300 border-white"
            >
              {social}
            </div>
          ))}
        </div>
        <div className="flex text-xs flex-col md:flex-row mt-20 gap-7">
          {links.map((link, key) => (
            <Link href={"/"} key={key} className="duration-300 hover:text-[red]">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
