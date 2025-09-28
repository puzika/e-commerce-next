import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

type ButtonProps = {
  children?: ReactNode,
  type: 'link' | 'button',
  href?: string,
  handler?: () => void,
}

export default function Button({ children, type, href, handler}: ButtonProps) {
  return (
    type === 'link' ?
      <Link href={href ?? "#"} className={`${styles.btn} ${styles.btnLink}`}>{ children }</Link> :
      <button onClick={handler} className={styles.btn}>{ children }</button>
  )
}