import type { ReactNode } from "react"
import styles from './layout.module.scss';

type SearchLayoutProps = {
  children: ReactNode,
}

export default function SearchLayout({ children }: SearchLayoutProps) {
  return (
    <div className={styles.searchLayout}>
      { children }
    </div>
  )
}