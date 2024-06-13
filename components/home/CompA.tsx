'use client'
import { framer2, framer4, framer7 } from '@/lib/framer';
import { motion } from 'framer-motion'

export default function CompA() {
  return (
    <div>
      <div className="">
        <div className="text-white  text-lg grid md:grid-cols-2  font-bold">
          <motion.div variants={framer7} initial="initial" whileInView="animate" className="relative h-96 md:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1707765643599-8c60886bf52b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover "
              alt=""
            />
          </motion.div>
          <motion.div variants={framer4} initial="initial" whileInView="animate" className="relative h-96 md:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover "
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
