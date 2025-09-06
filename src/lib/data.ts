import api from "./utils";
import type { Product } from "./definitions";

export async function getBestSelling() {
  try {
    const products = await api.get<{ products: Product[] | {[key: string]: unknown}}>('https://dummyjson.com/products?limit=4');
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get best selling products")
  }
}