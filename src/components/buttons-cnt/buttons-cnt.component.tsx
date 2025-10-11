'use client';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GoHeart } from 'react-icons/go';
import styles from './buttons-cnt.module.scss';

type ButtonsCntProps = {
  count: number,
  handleIncrement: () => void,
  handleDecrement: () => void,
}

export default function ButtonsCnt({count, handleIncrement, handleDecrement}: ButtonsCntProps) {
  return (
    <div className={styles.buttonsCnt}>
      <button 
        className={`${styles.btn} ${styles.btnLeft}`} 
        onClick={handleIncrement}
        aria-label='Increase button'
      >
        <AiOutlineMinus />
      </button>
      <div className={styles.cnt}>{count}</div>
      <button 
        className={`${styles.btn} ${styles.btnRight}`} 
        onClick={handleDecrement}
        aria-label="Decrease button"
      >
        <AiOutlinePlus />
      </button>
    </div>
  )
}