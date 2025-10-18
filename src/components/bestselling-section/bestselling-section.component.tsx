import Section from '../section/section.component';
import Button from '../button/button.component';
import CardSkeleton from '../card/card-skeleton.component';
import CardGroup from '../card-group/card-group.component';
import { Suspense } from 'react';
import { getProducts } from '@/lib/data';
import styles from './bestselling-section.module.scss';

function BestSellingSkeleton() {
  return (
    <div className={styles.cards}>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
}

async function Products() {
  const { products } = await getProducts(4);

  return (
    <CardGroup products={products} />
  )
}

export default function BestSellingSection() {
  return (
    <Section 
      title="This month"
      heading="Best selling products"
      action={
        <Button type="link" href="categories">View all</Button>
      }
    >
      <Suspense fallback={<BestSellingSkeleton />}>
        <Products />
      </Suspense>
    </Section>
  )
}