import ReviewSkeleton from '../review/review-skeleton.component';
import clsx from 'clsx';
import skeletonStyles from '@/skeleton.module.scss';
import styles from './reviews.module.scss';

type ReviewsSkeletonProps = {
  reviewsCnt: number,
}

function RatingItem() {
  return (
    <div className={styles.ratingItem}>
      <div className={styles.ratingBar}></div>
    </div>
  )
}

export default function ReviewsSkeleton({ reviewsCnt }: ReviewsSkeletonProps) {
  const reviews = [];

  for (let i = 0; i < reviewsCnt; i++) {
    reviews.push(
      <ReviewSkeleton key={crypto.randomUUID()} />
    )
  }

  return (
    <section className={clsx(styles.reviewsSection, styles.reviewsSectionSkeleton, skeletonStyles.skeleton)}>
      <div className={styles.header}>
        <div className={clsx(styles.heading, styles.headingSkeleton)}>
          <div className={styles.headingBlockSkeleton}></div>
        </div>
        <div className={styles.stats}>
          <div className={clsx(styles.statsOverall, styles.statsOverallSkeleton)}>
            <div className={styles.ratingSkeleton}></div>
            <div className={skeletonStyles.stars}></div>
            <div className={styles.countSkeleton}></div>
          </div>
          <div className={styles.separator}></div>
          <div className={clsx(styles.statsVisual, styles.statsVisualSkeleton)}>
            <RatingItem />
            <RatingItem />
            <RatingItem />
            <RatingItem />
            <RatingItem />
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.textarea}></div>
        <div className={skeletonStyles.btn}></div>
      </div>
      <div className={styles.reviews}>
        { reviews }
      </div>
    </section>
  )
}