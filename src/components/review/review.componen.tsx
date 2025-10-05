import type { ReviewType } from '@/lib/definitions';
import Stars from '../stars/stars.component';
import styles from './review.module.scss';
import sharedStyles from '@/shared-styles/review.module.scss'

type ReviewProps = {
  review: ReviewType,
}

export default function Review({ review }: ReviewProps) {
  const {
    reviewerName,
    date,
    rating,
    comment,
  } = review;
  
  const formattedDate = new Intl.DateTimeFormat(
    navigator.language, 
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  ).format(new Date(date));

  return (
    <article className={sharedStyles.review}>
      <div className={sharedStyles.header}>
        <p className={styles.name}>{reviewerName}</p>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.rating}>{rating.toFixed(1)}</p>
        <Stars rating={rating} />
      </div>
      <p className={styles.comment}>{comment}</p>
    </article>
  )
}