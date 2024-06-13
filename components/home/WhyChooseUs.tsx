"use client";
import { motion } from "framer-motion";
import { Bike, Bus, FormInputIcon, Phone } from "lucide-react";

export default function WhyChooseUs() {
  const datas = [
    {
      icon: <Bike size={20} />,
      title: "Fast Delivery",
      sub: "Experience",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, ut! Beatae corrupti",
    },
    {
      icon: <Phone size={20} />,
      title: "Best Customer ",
      sub: "Service",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, ut! Beatae corrupti",
    },
    {
      icon: <FormInputIcon size={20} />,
      title: "Most Authentic ",
      sub: "Products",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, ut! Beatae corrupti",
    },
  ];

  const num = 4
  const framer = {
    initial: (key: number) =>  ({
      opacity: 0,
      y: 100,
      x: key % 2 === 0 ? -100 : 100,
    }),
    animate: (key: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        delay: key * 0.25,
      },
    }),
  };
  return (
    <div className="bg-amber-100 py-20">
      <div className="container text-center">
        <div className="flex flex-col font-bold text-xl md:text-2xl mb-10 uppercase">
          <p>Why Choose Our </p>
          <p>Service?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {datas.map((data, key) => (
            <motion.div variants={framer} custom={key} viewport={{once: true}} initial="initial" whileInView="animate" className="flex gap-3 items-center flex-col" key={key}>
              <div className="h-9 w-9 md:h-10 md:w-10 border-2 rounded-full flex items-center border-black justify-center">
                {data.icon}
              </div>
              <div className="space font-bold text-15 md:text-base uppercase">
                <p>{data.title}</p>
                <p>{data.sub}</p>
              </div>
              <p className="px-5 sm:px-10 md:px-5">{data.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
