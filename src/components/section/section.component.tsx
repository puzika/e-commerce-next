'use client';

import type { ReactNode } from 'react';
import ScrollBtn from '../scroll-btn/scroll-btn.component';
import styles from './section.module.scss';

type SectionProps = {
  title: string,
  heading: string,
  children?: ReactNode,
}

export default function Section({ title, heading, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.horizontal}>
        <h3 className={styles.heading}>{heading}</h3>
        <div style={{ display: 'flex', gap: '1rem'}}>
          <ScrollBtn direction='left' handler={() => {}} />
          <ScrollBtn direction='right' handler={() => {}} />
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
      </div>
    </section>
  )
}