import styles from './card-skeleton.module.scss';
import sharedStyles from '@/shared-styles/card.module.scss';

export default function CardSkeleton() {
  return (
    <div className={`${sharedStyles.card} ${styles.skeleton}`}>
      <div className={`${styles.shimmer} ${styles.skeletonImage}`}></div>
      <div className={`${styles.shimmer} ${styles.skeletonTitle}`}></div>
      <div className={`${styles.shimmer} ${styles.skeletonPrice}`}></div>
      <div className={`${styles.shimmer} ${styles.skeletonRating}`}></div>
    </div>
  )
}