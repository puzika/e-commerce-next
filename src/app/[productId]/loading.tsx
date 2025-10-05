import ProductSkeleton from '@/components/product-skeleton/product-skeleton.component';
import ReviewsSkeleton from '@/components/reviews-skeleton/reviews-skeleton.component';
import styles from './loading.module.scss';

export default function ProductLoading() {
  return (
    <div className={styles.container}>
      <ProductSkeleton />
      <ReviewsSkeleton />
    </div>
  )
}