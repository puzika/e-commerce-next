import CustomLink from '../custom-link/custom-link.component'
import categories from '@/lib/categories'
import styles from './sidebar.module.scss'

export default async function Sidebar() {
  return  (
    <nav className={styles.nav}>
      <ul className={styles.sidebar}>
        {
          categories.map(({category}) => (
            <li key={crypto.randomUUID()} className={styles.item}>
              <CustomLink title={category} href={`categories/${category}`}/>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}