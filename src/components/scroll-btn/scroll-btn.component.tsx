import { 
  GoArrowLeft, 
  GoArrowRight, 
  GoArrowUp, 
  GoArrowDown 
} from 'react-icons/go';
import type { ReactNode } from 'react';
import styles from './scroll-btn.module.scss';

type Direction = 'up' | 'down' | 'left' | 'right';

type ScrollBtnProps = {
  direction: Direction,
  size?: number,
  handler: () => void,
}

export default function ScrollBtn({ direction, handler, size }: ScrollBtnProps) {
  const icons: Record<Direction, ReactNode> = {
    up: <GoArrowUp />,
    down: <GoArrowDown />,
    left: <GoArrowLeft />,
    right: <GoArrowRight />,
  }

  return (
    <button 
      className={styles.btn}
      style={{ 
        fontSize: `${size ?? 2.5}rem`,
        width: `${(size ?? 2.5) + 2}rem`
      }}
      aria-label={`Scroll ${direction}`} 
      onClick={handler} 
    >
      { icons[direction] }
    </button>
  )
}