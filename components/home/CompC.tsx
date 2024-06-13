import { framer3, framer4, framer5 } from '@/lib/framer';
import { motion } from 'framer-motion'
export default function CompC() {
  return (
    <div className="bg-blue-100 py-16">
      <div className="grid gap-7 container grid-cols-1 md:grid-cols-[1.5fr_1fr]">
        <motion.div variants={framer3} initial="initial" whileInView="animate" className="relative h-[500px] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1611817757591-c3f345024273?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover absolute top-0 left-0 z-0"
            alt=""
          />
          <div className="z-10 px-5 md:px-10 text-white relative mt-10">
            <p className="font-semibold text-2xl mb-2">
              Comfort Hoodie Ultra Light
            </p>
            <p className="text-sm">Light confortable hoodie for any condtion</p>
            <div className="flex items-center gap-1 mt-4">
              <p className="text-base font-semibold">$45.55</p>
              <p className=" line-through text-gray-500'">$56.00</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={framer5} initial="initial" whileInView="animate" className="relative h-80 md:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1690046793146-dd1cc08ea17d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover absolute top-0 left-0 z-0"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}
