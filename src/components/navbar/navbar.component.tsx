import Image from 'next/image';
import Logo from 'public/logo.svg';
import Search from '../search/search.component';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image 
        className={styles.logo}
        src={Logo} 
        alt={'Logo'}
        width="120"
        priority
      />
      <ul className={styles.list}>
        <li className={styles.item}><a className={styles.link} href="#">Home</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Contact</a></li>
        <li className={styles.item}><a className={styles.link} href="#">About</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Sign up</a></li>
      </ul>
      <div className={styles.right}>
        <Search name="search-products" placeholder='What are you looking for?' />
      </div>
    </nav>
  )
}