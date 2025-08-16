'use client';

import { IconContext } from 'react-icons';
import { IoCartOutline } from 'react-icons/io5';
import styles from './cart.module.scss';

export default function Cart() {
  return (
    <IconContext.Provider value={{ size: '3.5rem' }}>
      <IoCartOutline className={styles.cart} />
    </IconContext.Provider>
  )
}