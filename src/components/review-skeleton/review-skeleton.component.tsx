import styles from "./review-skeleton.module.scss";
import sharedStyles from "@/shared-styles/review.module.scss";
import skeletonStyles from "@/shared-styles/skeleton.module.scss";

export default function ReviewSkeleton() {
  return (
    <div className={`${sharedStyles.review} ${styles.review}`}>
      <div className={`${sharedStyles.header} ${styles.header}`}>
        <div className={styles.name}></div>
        <div className={styles.date}></div>
        <div className={styles.rating}></div>
        <div className={skeletonStyles.stars}></div>
      </div>
      <div className={styles.comment}>
        <div className={`${skeletonStyles.line} ${styles.lineLong}`}></div>
        <div className={`${skeletonStyles.line} ${styles.lineShort}`}></div>
      </div>
    </div>
  )
}