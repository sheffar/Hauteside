"use client";
import Link from "next/link";
import Pages from "./Pages";
import Icons from "./Icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  sumQty: {
    sum: number;
    qty: number;
  };
  fullname: string;
  userId: string;
  color: string
};

export default function Root({ sumQty,color, fullname, userId }: Props) {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const paths = pathname.split("/");
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="">
     
      {!paths.includes("auth") && (
        <div
          className={`h-[70px] z-[500000000000] shadow-md duration-300 border-b-2 fixed top-0 left-0 w-full ${
            scrollY <= 300
              ? `shadow-none  ${
                  pathname === "/"
                    ? " bg-black md:bg-transparent border-black md:border-transparent"
                    : "bg-black border-gray-300"
                }`
              : `backdrop-blur-xl shadow-md border-gray-300 ${
                  pathname === "/" ? "bg-black/50" : "bg-black"
                }`
          }`}
        >
          <div className="container h-full text-white flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link onClick={() => setOpen(false)} href="/" className="flex items-center">
                <img src="/logo.png" className="object-cover h-10" alt="" />
                <p className="font-bold text-2xl">HAUTESIDE</p>
              </Link>
              <Pages />
            </div>
            <Icons color={color} setOpen={setOpen} isOpen={isOpen} fullname={fullname} sumQty={sumQty} />
          </div>
        </div>
      )}
    </div>
  );
}
