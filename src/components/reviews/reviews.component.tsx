import type { Review } from '@/lib/definitions';
import Stars from '../stars/stars.component';
import styles from './reviews.module.scss';

type ReviewsProps = {
  reviews: Review[],
  rating: number,
}

export default function Reviews({ reviews, rating }: ReviewsProps) {
  const scores = [0, 0, 0, 0, 0];
  
  for (const {rating: score} of reviews) {
    scores[Math.floor(score - 1)] += 100 / reviews.length;
  }

  return (
    <section className={styles.reviews}>
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
    </section>
  )
}