import ProductCard from "./ProductCard";

export default function Root() {
  return (
    <div className="container mt-5">
      <div className="flex justify-between flex-col sm:flex-row md:items-center border-2 p-3 rounded-md mb-4">
        <p className="text-xl font-bold mb-3 sm:mb-0">Orders</p>
        <div className="grid grid-cols-3 sm:flex gap-4 justify-between">
          <p className="bg-yellow-500 text-white font-semibold flex items-center justify-center text-xs cursor-pointer px-4 py-2 h-fit rounded-md sm:rounded-full shadow-md">
            Ongoing
          </p>
          <p className="bg-green-500 text-white font-semibold flex items-center justify-center text-xs cursor-pointer px-4 py-2 h-fit rounded-md sm:rounded-full shadow-md">
            Delivered
          </p>
          <p className="bg-red-500 text-white font-semibold flex items-center justify-center text-xs cursor-pointer px-4 py-2 h-fit rounded-md sm:rounded-full shadow-md">
            Cancelled
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((el, key) => (
          <ProductCard key={key}/>
        ))}
      </div>
    </div>
  );
}
