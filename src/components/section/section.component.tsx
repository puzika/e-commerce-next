import type { ReactNode } from 'react';
import styles from './section.module.scss';

type SectionProps = {
  title: string,
  heading: string,
  children?: ReactNode,
  action?: ReactNode,
}

export default function Section({ title, heading, action, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.horizontal}>
        <h3 className={styles.heading}>{heading}</h3>
        { action }
      </div>
      { children }
    </section>
  )
}