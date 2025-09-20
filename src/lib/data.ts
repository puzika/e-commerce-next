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

export async function getCategoryList() {
  try {
    const list = await api.get<string[]>('https://dummyjson.com/products/category-list');
    return list;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get category list");
  }
}

export async function getCategory(category: string, limit: number = 4) {
  try {
    const products = await api.get<{ products: Product[]}>(`https://dummyjson.com/products/category/${category}?limit=${limit}`);
    return products;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to get ${category}`);
  }
}