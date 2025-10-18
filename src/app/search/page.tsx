import { RequestError } from "@/lib/definitions";
import { getProductsByName } from "@/lib/data";

type SearchPageProps = {
  searchParams: Promise<{ productName: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { productName } = await searchParams;
  const { products } = await getProductsByName(productName);

  if (products.length === 0) {
    const error: RequestError = {
      title: "Oops!",
      message: "No products found",
    }

    throw new Error(JSON.stringify(error));
  } 

  return (
    <></>
  )
}