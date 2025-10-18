import CardGroupSkeleton from '../card-group/card-group-skeleton.component';
import commonSkeletonStyles from '@/skeleton.module.scss';
import styles from './category.module.scss';

export default function CategorySkeleton() {
  return (
    <div>
      <div className={`
        ${styles.header}
        ${styles.headerSkeleton} 
        ${commonSkeletonStyles.skeleton}`
      }></div>
      <CardGroupSkeleton cardCnt={4} />
    </div>
  )
}