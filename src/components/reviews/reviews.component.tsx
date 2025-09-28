import type { ReviewType } from '@/lib/definitions';
import Stars from '../stars/stars.component';
import Review from '../review/review.componen';
import Button from '../button/button.component';
import sharedStyles from '@/shared-styles/input.module.scss';
import styles from './reviews.module.scss';

type ReviewsProps = {
  reviews: ReviewType[],
  rating: number,
}

export default function Reviews({ reviews, rating }: ReviewsProps) {
  const scores = [0, 0, 0, 0, 0];
  
  for (const {rating: score} of reviews) {
    scores[Math.floor(score - 1)] += 100 / reviews.length;
  }

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Reviews</h2>
        <div className={styles.stats}>
          <div className={styles.statsOverall}>
            <strong className={styles.rating}>{rating.toFixed(1)}</strong>
            <Stars rating={rating} />
            <p>{reviews.length} ratings</p>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.statsVisual}>
            {
              scores.map((score, idx) => (
                <div
                key={crypto.randomUUID()}
                className={styles.ratingItem}
                >
                  <div 
                    className={styles.ratingBar}
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to right,
                          #FFAD33 ${score}%,
                          #ddd ${score}%
                        )
                      `,
                    }}
                  >
                  </div>
                  <p className={styles.ratingItemDescription}>
                    <b>{(idx + 1).toFixed(1)}</b>
                    ({score.toFixed(1)}%)
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <form className={styles.form} >
        <textarea 
          name="review" 
          placeholder="Your review" 
          className={`${styles.textarea} ${sharedStyles.textarea}`}
        >
        </textarea>
        <Button type="button">submit</Button>
      </form>
      <div className={styles.reviews}>
        {
          reviews.map(review => (
            <Review key={crypto.randomUUID()} review={review} />
          ))
        }
      </div>
    </section>
  )
}