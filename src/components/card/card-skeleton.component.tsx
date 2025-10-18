import commonSkeletonStyles from '@/skeleton.module.scss';
import styles from './card.module.scss';

export default function CardSkeleton() {
  return (
    <div className={`${styles.card} ${commonSkeletonStyles.skeleton}`}>
      <div className={styles.imageWrapper}></div>
      <div className={`${styles.skeletonTitle} ${commonSkeletonStyles.line}`}></div>
      <div className={`${styles.skeletonPrice} ${commonSkeletonStyles.line}`}></div>
      <div className={`${styles.skeletonRating} ${commonSkeletonStyles.line}`}></div>
    </div>
  )
}