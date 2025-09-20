import Category from "@/components/category/category.component"
import { getCategoryList } from "@/lib/data"
import styles from './page.module.scss'

export default async function CategoriesPage() {
  const categories = await getCategoryList();

  return (
    <div className={styles.categories}>
      {
        categories.map(category => (
          <Category key={crypto.randomUUID()} category={category} />
        ))
      }
    </div>
  )
}