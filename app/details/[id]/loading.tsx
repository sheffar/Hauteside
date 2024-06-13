export default function loading() {
  const order = {
    user: "665275dba685f45979b986f6",
    product: [
      {
        id: "6656c79a2717efedcd76305d",
        quantity: 4,
        price: 28000,
        size: "xs",
        image:
          "https://ih1.redbubble.net/image.1747283476.8908/ssrco,slim_fit_t_shirt,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000-bg,f8f8f8.webp",
        name: "WebKrooner TSHirt",
      },
    ],
    address: "28 Jubril Oabisi",
    location: "Ikotun",
    phone: "08140601946",
    email: "eric@yahoo.com",
    delivery: "pending",
    status: "pending",
    totalQuantity: 4,
    totalPrice: 4000,
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="loader4"></div>
    </div>
  );
}
