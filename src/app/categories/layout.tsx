import type { ReactNode } from "react"
import styles from './layout.module.scss';

type CategoriesLayoutProps = {
  children?: ReactNode,
}

export default function CategoriesLayout({ children }: CategoriesLayoutProps) {
  return (
    <div className={styles.categories}>{ children }</div>
  )
}