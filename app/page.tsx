import { FetchAllProducts } from "@/actions/product/FetchAllProducts";
import Root from "@/components/home/Root";

export default async function Home() {
  const products = await FetchAllProducts();
  return (
    <div className="">
      <Root products={products} />;
    </div>
  );
}
