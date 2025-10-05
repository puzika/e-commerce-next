import CardSkeleton from '../card-skeleton/card-skeleton.component';
import sharedSkeletonStyles from '@/shared-styles/skeleton.module.scss';
import sharedStyles from '@/shared-styles/category.module.scss';
import styles from './category-skeleton.module.scss';

export default function CategorySkeleton() {
  return (
    <div>
      <div className={`
        ${styles.header} 
        ${sharedStyles.header} 
        ${sharedSkeletonStyles.skeleton}`
      }></div>
      <div className={`${sharedStyles.products}`}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}