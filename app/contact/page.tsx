import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <div className="h-96 relative bg-red-500 flex items-end p-10">
        <img src="https://images.pexels.com/photos/17147831/pexels-photo-17147831/free-photo-of-close-up-of-rolex-on-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute top-0 z-10 left-0 h-full w-full object-cover" alt="" />
        <p className="text-4xl text-gray-700 relative z-20 font-semibold">Contact us</p>
      </div>
      <div className="grid container mt-20 gap-5 md:gap-0 grid-cols-1 md:grid-cols-[3fr_1fr] ">
        <div className=" md:p-10">
          <p className="text-lg font-semibold">We would love to hear from you</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
            <div className="">
              <p className="mb-2 font-semibold">Name</p>
              <div className="h-12 border-2 border-gray-400 shadow-md rounded-md overflow-hidden">
                <input type="text" className="h-full w-full outline-none px-4"/>
              </div>
            </div>
            <div className="">
              <p className="mb-2 font-semibold">Email</p>
              <div className="h-12 border-2 border-gray-400 shadow-md rounded-md overflow-hidden">
                <input type="text" className="h-full w-full outline-none px-4"/>
              </div>
            </div>
          </div> 
          <div className="mt-5">
            <p className="font-semibold">Message</p>
            <div className="h-60 mt-2 border-2 border-gray-400 overflow-hidden bg-green-200 shadow-md rounded-md">
              <textarea name="" className="h-full p-4 w-full outline-none "></textarea>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white font-semibold shadow-md rounded-md mt-5 py-5 duration-300 active:scale-95 shadow-md">Send Message</button>
        </div>
        <div className="md:p-3 ">
          <p className="text-2xl font-semibold">Get In Touch</p>
          <p className="mt-4">You can get in touch with us with the email provided</p>
          <p>Email: <span className="font-semibold">contact@hauteside.com</span></p>
        </div>
      </div>
    </div>
  );
}