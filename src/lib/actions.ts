'use server';

import { redirect } from "next/navigation";

export async function searchProducts(name: string, data: FormData) {
  const query = data.get(name);
  const path = `/search?${name}=${query}`;
  redirect(path);
}