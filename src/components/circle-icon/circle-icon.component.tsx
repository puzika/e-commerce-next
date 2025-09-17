import type { ReactNode } from 'react';
import styles from './circle-icon.module.scss';

type CircleIconProps = {
  icon: ReactNode,
}

export default function CircleIcon({ icon }: CircleIconProps) {
  return (
    <div className={styles.circleIcon}>
      { icon }
    </div>
  )
}