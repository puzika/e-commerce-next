import ReviewSkeleton from '../review-skeleton/review-skeleton.component';
import styles from './reviews-skeleton.module.scss';
import sharedStyles from '@/shared-styles/reviews.module.scss';
import skeletonStyles from '@/shared-styles/skeleton.module.scss';

export default function ReviewsSkeleton() {
  return (
    <section className={`${sharedStyles.reviewsSection} ${styles.reviewsSection} ${skeletonStyles.skeleton}`}>
      <div className={`${sharedStyles.header} ${styles.header}`}>
        <div className={`${sharedStyles.heading} ${styles.heading}`}>
          <div className={styles.headingBlock}></div>
        </div>
        <div className={`${sharedStyles.stats} ${styles.stats}`}>
          <div className={`${sharedStyles.statsOverall} ${styles.statsOverall}`}>
            <div className={styles.rating}></div>
            <div className={skeletonStyles.stars}></div>
            <div className={styles.count}></div>
          </div>
          <div className={sharedStyles.separator}></div>
          <div className={`${sharedStyles.statsVisual} ${styles.statsVisual}`}>
            <div className={`${sharedStyles.ratingItem} ${styles.ratingItem}`}>
              <div className={sharedStyles.ratingBar}></div>
              <div className={styles.ratingItemDescription}></div>
            </div>
            <div className={`${sharedStyles.ratingItem} ${styles.ratingItem}`}>
              <div className={sharedStyles.ratingBar}></div>
              <div className={styles.ratingItemDescription}></div>
            </div>
            <div className={`${sharedStyles.ratingItem} ${styles.ratingItem}`}>
              <div className={sharedStyles.ratingBar}></div>
              <div className={styles.ratingItemDescription}></div>
            </div>
            <div className={`${sharedStyles.ratingItem} ${styles.ratingItem}`}>
              <div className={sharedStyles.ratingBar}></div>
              <div className={styles.ratingItemDescription}></div>
            </div>
            <div className={`${sharedStyles.ratingItem} ${styles.ratingItem}`}>
              <div className={sharedStyles.ratingBar}></div>
              <div className={styles.ratingItemDescription}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${sharedStyles.form} ${styles.form}`}>
        <div className={sharedStyles.textarea}></div>
        <div className={skeletonStyles.btn}></div>
      </div>
      <div className={styles.reviews}>
        <ReviewSkeleton />
        <ReviewSkeleton />
        <ReviewSkeleton />
      </div>
    </section>
  )
}