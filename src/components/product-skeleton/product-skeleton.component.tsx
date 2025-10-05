import styles from './product-skeleton.module.scss';
import sharedStyles from '@/shared-styles/product.module.scss';
import skeletonStyles from '@/shared-styles/skeleton.module.scss';

export default function ProductSkeleton() {
  return (
    <div className={sharedStyles.product}>
      <div className={`${sharedStyles.images} ${skeletonStyles.skeleton}`}>
        <div className={sharedStyles.currImg}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${styles.detailsWrapper} ${skeletonStyles.skeleton}`}>
        <div className={styles.heading}></div>
        <div className={styles.stats}></div>
        <div className={styles.price}></div>
        <div className={styles.description}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.term}></div>
        <div className={styles.term}></div>
        <div className={`${sharedStyles.buttons} ${styles.buttons}`}>
          <div className={skeletonStyles.btn}></div>
          <div className={skeletonStyles.btn}></div>
          <div className={skeletonStyles.iconBtn}></div>
        </div>
      </div>
    </div>
  )
}