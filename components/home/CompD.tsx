'use client'
import { framer2, framer5, framer7 } from '@/lib/framer';
import { motion } from 'framer-motion'

export default function CompD() {
  return (
   <div className="">
    <div className="grid auto-rows- gap-5 grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2">
            <motion.div variants={framer5} initial="initial" whileInView="animate" className="flex justify-center items-center">
                <img src="/sss.png" className="h-80 object-cover" alt="" />
            </motion.div>
            <motion.div variants={framer2} initial="initial" whileInView="animate" className="flex flex-col gap-4 py-10 px-2 justify-center">
                <p className="text-xl font-semibold">Up to 30% Discount </p>
                <p>Yeah thats correct!....On all our jackets, parkas, coats and any other outerware winter garments we are cutting 30% off to see you look classy.</p>
                <p className="px-5 py-3 rounded border-2 w-fit cursor-pointer shadow-md font-semibold bg-black text-white">Shop Now</p>
            </motion.div>
        </div>
        <motion.div variants={framer7} initial="initial" whileInView="animate" className="h-[60vh] bg-emerald-500">
            <img src="https://images.unsplash.com/photo-1520484205608-f65d27ad0765?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full object-cover" alt="" />
        </motion.div>
    </div>
   </div>
  );
}
