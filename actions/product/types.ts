export type TProduct = {
  id: string;
  name: string;
  stock: number;
  sizes: string[];
  images: string[];
  visible: boolean;
  details: string;
  discountPrice: number;
  actualPrice: number;
};

export type TSimilarAndRecentlyViewedProduct = {
  id: string;
  price: number;
  name: string;
  image: string;
};
