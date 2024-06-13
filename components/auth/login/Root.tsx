"use client";

import { Check, Eye, EyeOff } from "lucide-react";
import { useState, useTransition } from "react";
import { Login } from "@/actions/auth/Login";
import { isEmailOrPasswordEmpty, isEmailValid } from "@/lib/helpers";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { motion } from 'framer-motion'
import { framer } from "@/lib/framer";
import Link from "next/link";

export default function Root() {
  const [isPending, startTransition] = useTransition();
  const [isPassword, setIsPassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cookies] = useCookies(["url"]);
  const router = useRouter();
  
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });


  const Signin = () => {
    if (isEmailOrPasswordEmpty(email, password)) {
      setErrors({
        email: !email.trim() ? "Please input your email address" : "",
        password: !password.trim() ? "Please input your password" : "",
      });
      return;
    }
    if (!isEmailValid(email)) {
      setErrors({
        email: "Please input a valid email address",
        password: "",
      });
      return;
    }
    startTransition(async () => {
      const res: any = await Login(email, password);
      if (res?.error) {
        setErrors(res?.error);
        return;
      }
      const url = cookies.url;
      if (url === undefined) {
        return router.push(`/`);
      }
      return router.push(`/${url}`);
    });
  };
  return (
    <motion.div variants={framer} initial='initial' animate="animate"  className="min-h-screen relative flex flex-col gap-4 pt-10 md:pt-0 items-center justify-center">
      <div className="text-center flex flex-col items-center">
        <Link
          href={"/"}
          className="bg-blue-500 py-1 w-fit text-white px-3 sm:drop-shadow-md rounded-full font-semibold mb-3"
        >
          HAUTESUIDE
        </Link>
        <p className="font-semibold text-2xl sm:text-3xl mb-6">Welcome Back!</p>
      </div>
      <div className="w-full sm:w-[360px] px-5 sm:px-7 sm:shadow-md h-fit sm:p-7 sm:border border-gray-300">
        <div className="">
          <p className="mb-1 ml-2 font-semibold">Email Address</p>
          <div
            className={`h-14 ${
              errors.email ? "border-[red]" : "border-gray-400"
            } rounded-2xl overflow-hidden border w-full relative`}
          >
            <input
              type="text"
              className="h-full w-full pl-3 bg-white rounded-2xl outline-none font-semibold"
              onChange={(e) => {
                setErrors({ ...errors, email: "" });
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          {errors.email && <p className="text-[red]">{errors.email}</p>}
        </div>
        <div className="mt-8">
          <p className="mb-1 font-semibold ml-2">Password</p>
          <div
            className={`h-14 relative ${
              errors.password ? "border-[red]" : "border-gray-400"
            } rounded-2xl overflow-hidden border w-full relative`}
          >
            <input
              type={isPassword ? "password" : "text"}
              className={`h-full w-full pl-3 bg-white rounded-2xl outline-none font-semibold`}
              onChange={(e) => {
                setErrors({ ...errors, password: "" });
                setPassword(e.target.value);
              }}
              value={password}
            />
            {isPassword ? (
              <EyeOff
                size={20}
                onClick={() => setIsPassword(!isPassword)}
                className="cursor-pointer absolute -translate-y-1/2 right-3 top-1/2"
              />
            ) : (
              <Eye
                size={20}
                onClick={() => setIsPassword(!isPassword)}
                className="cursor-pointer absolute -translate-y-1/2 right-3 top-1/2"
              />
            )}
          </div>
          {errors.password && <p className="text-[red]">{errors.password}</p>}
        </div>
        <div className="flex mt-5 justify-between items-center">
          <div
            onClick={() => setChecked(!checked)}
            className="flex cursor-pointer items-center gap-2"
          >
            <div
              className={`h-4 w-4 flex items-center justify-center duration-300 text-white ${
                checked
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white border-gray-300"
              } border-2`}
            >
              <Check size={14} />
            </div>
            <p>Remember me</p>
          </div>
          <p className="cursor-pointer text-sm hover:underline text-blue-600 hover:text-blue-700 ">
            Forgot password?
          </p>
        </div>
        <button
          onClick={Signin}
          className="h-14 w-full bg-black text-white font-semibold mt-10 rounded-2xl duration-300 flex items-center justify-center active:scale-95"
        >
          {isPending ? <span className="loader2"></span> : "Continue"}
        </button>
        <div className="flex my-10 items-center gap-3">
          <div className="h-[1px] bg-gray-300 flex-1"></div>
          <p>Or</p>
          <div className="h-[1px] bg-gray-300 flex-1"></div>
        </div>
        <div className="flex justify-center">
          <Link href={'/auth/signup'} className="text-center w-fit cursor-pointer text-blue-600 hover:text-blue-700 hover:font-semibold underline">
            Create an Account
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
