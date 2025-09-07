import api from "./utils";
import type { Product } from "./definitions";

export async function getProducts(limit: number = 30) {
  try {
    const products = await api.get<{ products: Product[]}>(`https://dummyjson.com/products?limit=${limit}`);
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get best selling products")
  }
}