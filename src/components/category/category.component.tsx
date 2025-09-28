import { getCategory } from '@/lib/data';
import { Suspense } from 'react';
import Button from '../button/button.component';
import Card from '../card/card.component';
import CardSkeleton from '../card-skeleton/card-skeleton.component';
import Link from 'next/link';
import styles from './category.module.scss';

type CategoryProps = {
  category: string,
}

async function Cards({category}: CategoryProps) {
  const { products } = await getCategory(category);

  return (
    products.map(({ id, ...props }) => (
      <Card 
        key={`${category}-card-${id}-${crypto.randomUUID()}`}
        id={`${id}`}
        {...props}
      />
    ))
  )
}

function Skeletons() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  )
}

export default async function Category({ category }: CategoryProps) {
  return (
    <div className={styles.category}>
      <div className={styles.header}>
        <h2 className={styles.title}>{ category }</h2>
        <Button type='link' href={`categories/${category}`}>See all</Button>
      </div>
      <div className={styles.products}>
        <Suspense fallback={<Skeletons />}>
          <Cards category={category} />
        </Suspense>
      </div>
    </div>
  )
}