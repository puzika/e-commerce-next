import CustomLink from '../custom-link/custom-link.component'
import styles from './sidebar.module.scss'

export default function Sidebar() {
  return  (
    <nav className={styles.nav}>
      <ul className={styles.sidebar}>
        <li className={styles.item}><CustomLink title={"Women's fashion"} href={'#'}/></li>
        <li className={styles.item}><CustomLink title={"Men's fashion"} href={'#'} /></li>
        <li className={styles.item}><CustomLink title={"Electornics"} href={'#'} /></li>
        <li className={styles.item}><CustomLink title={"Home & Lifestyle"} href={'#'} /></li>
        <li className={styles.item}><CustomLink title={"Medicine"} href={'#'} /></li>
        <li className={styles.item}><CustomLink title={"Sports & Outdoor"} href={'#'} /></li>
        <li className={styles.item}><CustomLink title={"Baby's & Toys"} href={'#'} /></li>
        <li className={styles.item}><CustomLink title={"Groceries & Pets"} href={'#'} /></li>
        <li className={styles.item}><CustomLink title={"Health & Beauty"} href={'#'} /></li>
      </ul>
    </nav>
  )
}