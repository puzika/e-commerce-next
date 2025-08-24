'use client';

import { 
  GoArrowLeft, 
  GoArrowRight, 
  GoArrowUp, 
  GoArrowDown 
} from 'react-icons/go';
import type { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import styles from './scroll-btn.module.scss';

type Direction = 'up' | 'down' | 'left' | 'right';

type ScrollBtnProps = {
  direction: Direction,
  handler: () => void,
}

export default function ScrollBtn({ direction, handler }: ScrollBtnProps) {
  const icons: Record<Direction, ReactNode> = {
    up: <GoArrowUp />,
    down: <GoArrowDown />,
    left: <GoArrowLeft />,
    right: <GoArrowRight />,
  }

  return (
    <button onClick={handler} className={styles.btn}>
      <IconContext value={{ size: "2.5rem" }}>
        { icons[direction] }
      </IconContext>
    </button>
  )
}