import ProductsBlock from "@/components/products/products-block.component";
import { getCategoryList, getCategory } from "@/lib/data"

async function Category({ category }: { category: string }) {
  const { products } = await getCategory(category);

  return (
    <ProductsBlock productName={category} products={products} />
  )
}

export default async function CategoriesPage() {
  const categories = await getCategoryList();

  return (
    <>
      {
        categories.map(category => (
          <Category key={crypto.randomUUID()} category={category} />
        ))
      }
    </>
  )
}