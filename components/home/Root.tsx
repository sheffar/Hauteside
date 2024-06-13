"use client";
import { motion } from "framer-motion";
import { TProduct } from "@/actions/product/types";
import Hero from "./Hero";
import { framer } from "@/lib/framer";
import CompA from "./CompA";
import CompB from "./CompB";
import WhyChooseUs from "./WhyChooseUs";
import CompC from "./CompC";
import Deal from "./Deal";
import CompD from "./CompD";
import CompE from "./CompE";
import NewsLetter from "./NewsLetter";

type Props = {
  products: TProduct[];
};

export default function Root({ products }: Props) {
  return (
    <motion.div
      variants={framer}
      initial="initial"
      animate="animate"
      className=""
    >
      <Hero />
      <CompE />
      <CompD />
      <Deal />
      <WhyChooseUs />
      <CompC />
      <CompA />
      <CompB />
      <NewsLetter />
    </motion.div>
  );
}
