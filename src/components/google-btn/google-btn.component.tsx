'use client';

import { IconContext } from 'react-icons';
import { FcGoogle } from 'react-icons/fc';
import styles from './google-btn.module.scss';

type GoogleBtnProps = {
  title: string,
}

export default function GoogleBtn({ title }: GoogleBtnProps) {
  return (
    <button className={styles.googleBtn}>
      <IconContext.Provider value={{ size: '2.5rem' }}>
        <FcGoogle />
      </IconContext.Provider>
      <span>{title}</span>
    </button>
  )
}