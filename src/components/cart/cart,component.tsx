import { IoCartOutline } from 'react-icons/io5';
import type { IconProps } from '@/lib/definitions';
import styles from './cart.module.scss';

export default function Cart({ size }: IconProps) {
  return (
    <div className={styles.icon} style={{ fontSize: `${size}rem` }}>
      <IoCartOutline />
    </div>
  )
}