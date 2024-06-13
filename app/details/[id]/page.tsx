import { FetchSingleProduct } from "@/actions/product/FetchSingleProduct";
import Root from "@/components/details/Root";
import { FetchSimilarProducts } from "@/actions/product/FetchSimilarProducts";
import {
  FetchRecentlyViewedProducts,
} from "@/actions/product/FetchRecentlyViewedProducts";
import { GetUserId } from "@/actions/user/GetUserInfo";
import { TProduct } from "@/actions/product/types";

type Params = {
  params: {
    id: string;
  };
};

export default async function DetailsPage({ params }: Params) {
  const userId = await GetUserId();
  const product = await FetchSingleProduct(params.id) as TProduct;
  const similarProducts = await FetchSimilarProducts(params.id);
  const recentlyViewedProducts = await FetchRecentlyViewedProducts(product.id);
  return (
    <div>
      <Root
        product={product}
        similarProducts={similarProducts}
        recentlyViewedProducts={recentlyViewedProducts}
        userId={userId}
      />
    </div>
  );
}
