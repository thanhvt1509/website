export interface IProduct {
  _id: number | string;
  name: string;
  price: number;
  original_price: number;
  description_special: string;
  description_short: string;
  description_long: string;
  brand: string;
  images: string[];
  categoryId: string;
}
