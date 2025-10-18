import skeletonStyles from '@/skeleton.module.scss';
import styles from './product.module.scss';
import clsx from 'clsx';

export default function ProductSkeleton() {
  return (
    <div className={styles.product}>
      <div className={`${styles.images} ${skeletonStyles.skeleton}`}>
        <div className={styles.currImg}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${styles.detailsWrapper} ${skeletonStyles.skeleton}`}>
        <div className={styles.headingSkeleton}></div>
        <div className={styles.statsSkeleton}></div>
        <div className={styles.priceSkeleton}></div>
        <div className={clsx(styles.description, styles.descriptionSkeleton)}>
          <div className={styles.lineSkeleton}></div>
          <div className={styles.lineSkeleton}></div>
          <div className={styles.lineSkeleton}></div>
        </div>
        <div className={styles.termSkeleton}></div>
        <div className={styles.termSkeleton}></div>
        <div className={`${styles.buttons} ${styles.buttonsSkeleton}`}>
          <div className={skeletonStyles.btn}></div>
          <div className={skeletonStyles.btn}></div>
          <div className={skeletonStyles.iconBtn}></div>
        </div>
      </div>
    </div>
  )
}