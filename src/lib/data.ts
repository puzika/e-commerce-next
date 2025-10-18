import api from "./utils";
import type { ProductType } from "./definitions";

const BASE_URL = 'https://dummyjson.com';

export async function getProducts(limit: number = 30) {
  const products = await api.get<{ products: ProductType[]}>({ 
    url: `${BASE_URL}/products?limit=${limit}`,
    errorDescription: 'Failed to fetch products',
    options: { next: { revalidate: 600 }},
  });

  return products;
}

export async function getCategoryList() {
  const list = await api.get<string[]>({ 
    url: `${BASE_URL}/products/category-list`,
    errorDescription: 'Failed to fetch category list',
    options: { next: { revalidate: 600 }}
  });

  return list;
}

export async function getCategory(category: string, limit: number = 4) {
  const products = await api.get<{ products: ProductType[]}>({ 
    url: `${BASE_URL}/products/category/${category}?limit=${limit}`,
    errorDescription: 'Failed to fetch category products',
    options: { next: { revalidate: 600 }}
  });

  return products;
}

export async function getProduct(productId: string) {
  const product = await api.get<ProductType>({ 
    url: `${BASE_URL}/products/${productId}`,
    errorDescription: `Failed to fetch product. Product id: ${productId}`,
  });

  return product;
}

export async function getProductsByName(productName: string) {
  const products = await api.get<{ products: ProductType[] }>({
    url: `${BASE_URL}/products/search?q=${productName}`,
    errorDescription: `Failed to fetch products. Product name: ${productName}`,
  });

  return products;
}