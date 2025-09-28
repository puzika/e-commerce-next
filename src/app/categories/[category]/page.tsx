import CardSkeleton from "@/components/card-skeleton/card-skeleton.component";
import Card from "@/components/card/card.component";
import { getCategory } from "@/lib/data";
import { Suspense } from "react";
import styles from './page.module.scss';

type CategoryPageProps = {
  params: Promise<{category: string}>,
}

function Skeletons() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  )
}

type ProductsProps = {
  category: string,
}

async function Products({ category }: ProductsProps) {
  const { products } = await getCategory(category, 200);

  return (
    products.map(({ id, ...props}) => (
      <Card
        key={`category-card-${id}-${crypto.randomUUID()}`}
        id={`${id}`}
        {...props}
      />
    ))
  )
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  return (
    <div className={styles.category}>
      <h2 className={styles.heading}>{category}</h2>
      <div className={styles.products}>
        <Suspense fallback={<Skeletons />}>
          <Products category={category} />
        </Suspense>
      </div>
    </div>
  )
}