'use server';

import { redirect } from "next/navigation";

export async function searchProducts(name: string, data: FormData) {
  const query = data.get(name)?.toString().trim();

  if (!query) return;

  redirect(`/search?${name}=${query}`); 
}