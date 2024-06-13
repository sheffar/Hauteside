"use client";
import { framer4, framer5, framer7 } from "@/lib/framer";
import { motion } from "framer-motion";

export default function CompB() {
  return (
    <div>
      <div className="grid md:grid-cols-3 ">
        <motion.div
          variants={framer4}
          initial="initial"
          whileInView="animate"
          className="h-80 md:h-[400px]"
        >
          <img
            src="https://images.pexels.com/photos/2221879/pexels-photo-2221879.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={framer5}
          initial="initial"
          whileInView="animate"
          className="h-80 md:h-[400px]"
        >
          <img
            src="https://images.pexels.com/photos/2364575/pexels-photo-2364575.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={framer7}
          initial="initial"
          whileInView="animate"
          className="h-80 md:h-[400px]"
        >
          <img
            src="https://images.pexels.com/photos/3152226/pexels-photo-3152226.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
