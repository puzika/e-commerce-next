import Category from "@/components/category/category.component"
import { getCategoryList } from "@/lib/data"

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