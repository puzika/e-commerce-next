import { getCategory } from '@/lib/data';
import { Suspense } from 'react';
import Button from '../button/button.component';
import CardGroupSkeleton from '../card-group/card-group-skeleton.component';
import CardGroup from '../card-group/card-group.component';
import styles from './category.module.scss';

type CategoryProps = {
  category: string,
}

export default async function Category({ category }: CategoryProps) {
  const productsPromise = getCategory(category);

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>{ category }</h2>
        <Button type='link' href={`categories/${category}`}>See all</Button>
      </div>
      <Suspense fallback={<CardGroupSkeleton cardCnt={4} />}>
        <CardGroup productsPromise={productsPromise} />
      </Suspense>
    </div>
  )
}