import { FaShop } from "react-icons/fa6"

export const AboutPage = () => {

    const Img = [1, 2]
    const subimage = [1, 2, 3, 4]
    const writenText = [
      {
        img: "https://images.unsplash.com/photo-1626131522159-fd77ba01b8ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        testimoni: "Once we oredred some accessorie items and we got the products delivered in our doorstep, the customer support was super hekoful and they answerd all my queries.",
        user: "Stacy"
      },
      {
        img: "https://images.unsplash.com/photo-1626131522159-fd77ba01b8ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        testimoni: "I ordered 5 shirts form them and received them in no time. The customer support was awesome!",
        user: "Tifanny"
  
      },
      {
        img: "https://images.unsplash.com/photo-1626131522159-fd77ba01b8ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        testimoni: "I got a wrong shirt so i contacted them and they happily offered me a refund. I will surely ship form the, again.",
        user: "James"
      }
  
    ]
  
    return (
        <>
           <div className=" w-full h-auto my-2 bg-white">
        <div className="h-screen relative justify-center w-full bg-black">
          <img src="https://images.unsplash.com/photo-1626131522159-fd77ba01b8ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute top-0 right-0 object-cover w-full h-full z-0" alt="About us image" />

          <p className="text-white font-bold absolute translate-y-28 top-1/2 left-10">ABOUT  HAUTESIDE</p>
        </div>

        <div className="grid gap-3 md:gap-6 h-full grid-cols-1 md:grid-cols-2 my-6 mx-auto w-fit">

          {Img.map((el) => (
            <div className="w-full max-w-[500px] h-96 relative">
              <img src="https://images.unsplash.com/photo-1626131522159-fd77ba01b8ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover " />
              <button className="text-white font-semibold absolute bottom-5 w-fit py-2 px-3 bg-black border-2 border-white flex items-center gap-2 hover:scale-105 duration-300 translate-x-1/2"> <FaShop /> Buy Now</button>
            </div>
          ))}


        </div>

        <p className="my-10 font-bold text-lg md:text-xl mx-auto w-fit">THE FOUNDERS</p>

        <div className="w-full grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-4 px-2 h-auto  md:px-5 mx-auto bg-gray-200/35">
          {subimage.map((el) => (
            <div className="w-full h-40 mb-8">
              <img src="https://images.unsplash.com/photo-1626131522159-fd77ba01b8ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
              <p className="font-semibold items-start mt-2 ">Rich Dot Com</p>
            </div>
          ))}
        </div>

        <div className="bg-white py-4">
          <p className="font-bold text-lg md:text-2xl py-5 mx-auto w-fit">Testimonials</p>

          <div className=" max-w-[800px]   mx-auto">


            {writenText.map((el) => (
              <div className="flex flex-col items-center justify-center  md:flex-row gap-5 px-2   my-4  w-full ">
                <div className="w-36 h-36 rounded-full">
                  <img src={el.img} className="w-full h-full rounded-full md:rounded-3xl object-cover" alt="Profile_img" />
                </div>
                <div className="flex w-full justify-center flex-col px-2 sm:px-10 gap-3 ">
                  <p className="font-bold text-black  text-base">{el.testimoni}</p>
                  <p className="text-sm font-semibold items-start">{el.user}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
        </>
    )
}
