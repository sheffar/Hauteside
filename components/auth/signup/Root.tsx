"use client";
import { Register } from "@/actions/auth/Register";
import { Check, Eye, EyeOff } from "lucide-react";
import { useState, useTransition } from "react";
import { passwordOrEmailOrFullnameIsEmpty, isEmailValid, isPasswordValid } from "@/lib/helpers";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { framer } from "@/lib/framer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Root() {
  const [isPending, startTransition] = useTransition();
  const [isPassword, setIsPassword] = useState(true);
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [cookies] = useCookies(["url"]);
  const router = useRouter();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const Signup = () => {
    if (passwordOrEmailOrFullnameIsEmpty(fullname, email, password)) {
      setErrors({
        email: !email.trim() ? "Please input your email address" : "",
        password: !password.trim() ? "Please input your password" : "",
        fullname: !fullname.trim() ? "Please input your fullname" : "",
      });
      return;
    }
    if (isEmailValid(email)) {
      setErrors({
        email: "Please input a valid email address",
        password: "",
        fullname: "",
      });
      return;
    }
    if (!isPasswordValid(password)) {
      setErrors({
        email: "",
        password: "Password cannot be less than 8 characters",
        fullname: "",
      });
      return
    }
    startTransition(async () => {
      const res: any = await Register({ fullname, email, password });
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
    <motion.div
      variants={framer}
      initial="initial"
      animate="animate"
      className="min-h-screen relative flex pt-10 md:pt-0 flex-col gap-4 items-center justify-center"
    >
      <div className="text-center flex flex-col items-center">
        <Link
          href={"/"}
          className="bg-blue-500 py-1 w-fit text-white px-3 drop-shadow-md rounded-full font-semibold mb-3"
        >
          HAUTESUIDE
        </Link>
        <p className="font-semibold text-2xl sm:text-3xl mb-4">Hello & Welcome!</p>
      </div>
      <div className="w-full sm:w-[360px] px-5 sm:px-7 sm:shadow-md h-fit sm:p-7 sm:border border-gray-300">
        <div className="">
          <p className="mb-1 ml-2 font-semibold">Fullname</p>
          <div
            className={`h-14 ${
              errors.fullname ? "border-[red]" : "border-gray-400"
            } rounded-2xl overflow-hidden border w-full relative`}
          >
            <input
              type="text"
              className="h-full w-full pl-3 bg-white rounded-2xl outline-none font-semibold"
              onChange={(e) => {
                setErrors({ ...errors, fullname: "" });
                setFullname(e.target.value);
              }}
              value={fullname}
            />
          </div>
          {errors.fullname && <p className="text-[red]">{errors.fullname}</p>}
        </div>
        <div className="mt-5">
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
        <div className="mt-5">
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
        
        <button
          onClick={Signup}
          className="h-14 w-full bg-black text-white font-semibold mt-10 rounded-2xl duration-300 flex items-center justify-center active:scale-95 "
        >
          {isPending ? <span className="loader2"></span> : "Continue"}
        </button>
        <div className="flex my-10 items-center gap-3">
          <div className="h-[1px] bg-gray-300 flex-1"></div>
          <p>Or</p>
          <div className="h-[1px] bg-gray-300 flex-1"></div>
        </div>
        <div className="flex justify-center">
          <Link href={'/auth/login'} className="text-center w-fit cursor-pointer text-blue-600 hover:text-blue-700 hover:font-semibold underline">
            Login to an existing Account
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
