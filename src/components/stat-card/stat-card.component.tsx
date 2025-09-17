import type { ReactNode } from 'react';
import CircleIcon from '../circle-icon/circle-icon.component';
import styles from './stat-card.module.scss';

type StatCardProps = {
  icon: ReactNode,
  stat: string,
  description: string,
}

export default function StatCard({ icon, stat, description }: StatCardProps) {
  return (
    <div className={styles.card}>
      <CircleIcon icon={icon} />
      <p className={styles.stat}>{stat}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}