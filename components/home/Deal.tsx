'use client'
import { framer3, framer5 } from '@/lib/framer';
import { motion } from 'framer-motion'



export default function Deal() {
  return (
    <div className="bg-emerald-50 py-10">
      <div className="grid container grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div variants={framer5} initial="initial" whileInView="animate" className="flex md:px-12 lg:px-14 xl:px-16 flex-col justify-center">
          <p className="text-2xl md:text-3xl font-bold text-center md:text-start">DEAL OF THE DAY</p>
          <div className="p-4 mt-4 bg-white border-2 shadow-md rounded-md">
            <p className="font-bold mb-2 text-lg">Hauteside Billa Hoodie</p>
            <div className="mb-2">
              <span className="text-base font-semibold">$345</span>
              <span className="ml-2 text-xs text-gray-500 line-through">$375</span>
            </div>
            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit optio laudantium officia illum eaque corrupti excepturi ipsam consequatur incidunt aliquam?</p>
            <p className="px-5 py-3 cursor-pointer mt-5 text-xs font-semibold rounded-md border-blue-600 text-blue-600 shadow-md w-fit border-2">SHOP NOW</p>
          </div>
        </motion.div>
        <motion.div variants={framer3} initial="initial" whileInView="animate" className="flex h-[400px] items-center justify-center">
            <img src="/ddd.png" alt="" className="h-[375px]" />
        </motion.div>
      </div>
    </div>
  );
}
