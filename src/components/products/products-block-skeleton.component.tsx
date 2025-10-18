import CardGroupSkeleton from '../card-group/card-group-skeleton.component';
import commonSkeletonStyles from '@/skeleton.module.scss';
import styles from './products-block.module.scss';

type ProductsBlockSkeletonProps = {
  cardCnt?: number,
}

export default function ProductsBlockSkeleton({ cardCnt }: ProductsBlockSkeletonProps) {
  return (
    <div>
      <div className={`
        ${styles.header}
        ${styles.headerSkeleton} 
        ${commonSkeletonStyles.skeleton}`
      }></div>
      <CardGroupSkeleton cardCnt={cardCnt ?? 4} />
    </div>
  )
}