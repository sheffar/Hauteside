"use client";
import Main from "./Main";

export default function Hero() {
  return (
    <div className="h-screen relative flex justify-center flex-col bg-black">
      <img src="https://images.unsplash.com/photo-1626131522159-fd77ba01b8ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute top-0 left-0 w-full h-full object-cover z-0 " alt="" />
      <Main />
    </div>
  );
}
