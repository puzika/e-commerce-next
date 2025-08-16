import Image from 'next/image';
import Logo from 'public/logo.svg';
import Link from 'next/link';
import CustomLink from '../custom-link/custom-link.component';
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
        <li className={styles.item}><CustomLink title={'Home'} href="#" /></li>
        <li className={styles.item}><CustomLink title={'Contact'} href="#" /></li>
        <li className={styles.item}><CustomLink title={'About'} href="#" /></li>
        <li className={styles.item}><CustomLink title={'Sign up'} href="#" /></li>
      </ul>
      <div className={styles.right}>
        <Search name="search-products" placeholder='What are you looking for?' />
        <Favorite />
        <Cart />
      </div>
    </nav>
  )
}