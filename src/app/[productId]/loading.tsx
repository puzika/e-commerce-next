import ProductSkeleton from '@/components/product/product-skeleton.component';
import ReviewsSkeleton from '@/components/reviews/reviews-skeleton.component';
import styles from './loading.module.scss';

export default function ProductLoading() {
  return (
    <div className={styles.container}>
      <ProductSkeleton />
      <ReviewsSkeleton reviewsCnt={3} />
    </div>
  )
}