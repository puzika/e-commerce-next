import type { ReviewType } from '@/lib/definitions';
import Stars from '../stars/stars.component';
import Review from '../review/review.componen';
import Button from '../button/button.component';
import TextField from '../text-field/text-field.component';
import styles from './reviews.module.scss';
import sharedStyles from '@/shared-styles/reviews.module.scss';

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
    <section className={sharedStyles.reviewsSection}>
      <div className={sharedStyles.header}>
        <h2 className={sharedStyles.heading}>Reviews</h2>
        <div className={sharedStyles.stats}>
          <div className={sharedStyles.statsOverall}>
            <strong className={styles.rating}>{rating.toFixed(1)}</strong>
            <Stars rating={rating} />
            <p>{reviews.length} ratings</p>
          </div>
          <div className={sharedStyles.separator}></div>
          <div className={sharedStyles.statsVisual}>
            {
              scores.map((score, idx) => (
                <div
                key={crypto.randomUUID()}
                className={sharedStyles.ratingItem}
                >
                  <div 
                    className={sharedStyles.ratingBar}
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
      <form className={sharedStyles.form} >
        <div className={sharedStyles.textarea}>
          <TextField 
            fieldType="textarea"
            name="review"
            placeholder="Your review"
          />
        </div>
        <Button type="button">submit</Button>
      </form>
      <div>
        {
          reviews.map(review => (
            <Review key={crypto.randomUUID()} review={review} />
          ))
        }
      </div>
    </section>
  )
}