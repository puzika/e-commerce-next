import styles from './card-skeleton.module.scss';
import sharedStyles from '@/shared-styles/card.module.scss';
import skeletonStyles from '@/shared-styles/skeleton.module.scss';

export default function CardSkeleton() {
  return (
    <div className={`${sharedStyles.card} ${skeletonStyles.skeleton}`}>
      <div className={sharedStyles.cardImage}></div>
      <div className={`${styles.skeletonTitle} ${skeletonStyles.line}`}></div>
      <div className={`${styles.skeletonPrice} ${skeletonStyles.line}`}></div>
      <div className={`${styles.skeletonRating} ${skeletonStyles.line}`}></div>
    </div>
  )
}