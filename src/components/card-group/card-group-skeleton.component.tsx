import CardSkeleton from "../card/card-skeleton.component";
import styles from './card-group.module.scss'

type CardGroupSkeletonProps = {
  cardCnt: number,
}

export default function CardGroupSkeleton({ cardCnt }: CardGroupSkeletonProps) {
  const skeleton = [];

  for (let i = 0; i < cardCnt; i++) {
    skeleton.push(<CardSkeleton key={i} />)
  }

  return (
    <div className={styles.cards}>
      { skeleton }
    </div>
  )
}