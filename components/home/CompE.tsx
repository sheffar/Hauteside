'use client'
import { framer2, framer4, framer6 } from '@/lib/framer';
import { motion } from 'framer-motion'

export default function CompE() {
  return (
    <div className="grad lg:px-5 py-12">
      <div className="container grid items-center grid-cols-1 lg:grid-cols-2 gap-5 ">
        <motion.div variants={framer2} initial="initial" whileInView="animate" className="lg:p-5 h-[350px] md:h-[450px]">
          <img
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
            className="h-full w-full object-cover"
            alt=""
          />
        </motion.div>
        <motion.div variants={framer4} initial="initial" whileInView="animate" className="lg:h-[65vh] text-center lg:text-start flex flex-col gap-7 justify-center lg:px-5 py-5 lg:py-10">
          <div className="text-2xl font-semibold">
            <p>
              Motion With{" "}
              <span className="text-3xl lg:text-4xl font-normal block lg:inline">
                HAUTESIDE
              </span>
            </p>
          </div>
          <p className="pr-7 pl-7 lg:pl-0 lg:pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptatibus saepe necessitatibus atque, sunt sed iusto cum.
            Molestias eos, corrupti nobis facilis reiciendis at consectetur
            dolores, nemo excepturi quia aliquam.
          </p>
          <div className="flex justify-center lg:justify-start">
            <p className="border-2 border-black px-5 py-2 rounded-full w-fit">
              See More
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
