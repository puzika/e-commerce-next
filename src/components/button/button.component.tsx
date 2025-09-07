import type { ReactNode } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  children: ReactNode,
  handler?: () => void,
}

export default function Button({ children, handler}: ButtonProps) {
  return (
    <button onClick={handler} className={styles.btn}>
      { children }
    </button>
  )
}