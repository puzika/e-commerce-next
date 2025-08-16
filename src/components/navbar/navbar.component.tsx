import Image from 'next/image';
import Logo from 'public/logo.svg';
import Link from 'next/link';
import Search from '../search/search.component';
import Favorite from '../favorite/favorite.component';
import Cart from '../cart/cart,component';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href={'/'}>
        <Image 
          src={Logo} 
          alt={'Logo'}
          width="120"
          priority
        />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}><a className={styles.link} href="#">Home</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Contact</a></li>
        <li className={styles.item}><a className={styles.link} href="#">About</a></li>
        <li className={styles.item}><a className={styles.link} href="#">Sign up</a></li>
      </ul>
      <div className={styles.right}>
        <Search name="search-products" placeholder='What are you looking for?' />
        <Favorite />
        <Cart />
      </div>
    </nav>
  )
}