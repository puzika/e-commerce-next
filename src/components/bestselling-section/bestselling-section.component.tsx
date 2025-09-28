import Section from '../section/section.component';
import Button from '../button/button.component';
import CardSkeleton from '../card-skeleton/card-skeleton.component';
import Card from '../card/card.component';
import Link from 'next/link';
import { Suspense } from 'react';
import { getProducts } from '@/lib/data';
import styles from './bestselling-section.module.scss';

async function BestSellingProducts() {
  const products = (await getProducts(4)).products;

  return(
    <div className={styles.cards}>
      {
        products.map(({id, ...props}) => (
          <Card 
            key={id}
            id={`${id}`}
            {...props}
          />
        ))
      }
    </div>
  )
}

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
        <BestSellingProducts />
      </Suspense>
    </Section>
  )
}