import clsx from "clsx";
import skeletonStyles from "@/skeleton.module.scss";
import styles from "./review.module.scss";

export default function ReviewSkeleton() {
  return (
    <div className={clsx(styles.review, skeletonStyles.skeleton)}>
      <div className={clsx(styles.header, styles.headerSkeleton)}>
        <div className={styles.nameSkeleton}></div>
        <div className={styles.dateSkeleton}></div>
        <div className={styles.ratingSkeleton}></div>
        <div className={skeletonStyles.stars}></div>
      </div>
      <div className={clsx(styles.comment, styles.commentSkeleton)}>
        <div className={clsx(skeletonStyles.line, styles.lineLongSkeleton)}></div>
        <div className={clsx(skeletonStyles.line, styles.lineShortSkeleton)}></div>
      </div>
    </div>
  )
}