import ProductsBlock from "@/components/products/products-block.component";
import { getCategory } from "@/lib/data";

type CategoryPageProps = {
  params: Promise<{category: string}>,
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const { products } = await getCategory(category, 200);

  return (
    <ProductsBlock productName={category} products={products} complete={true} />
  )
}