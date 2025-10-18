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
      <h1>
        <Link className={styles.logo} href={'/'}>
          <Image 
            src={Logo} 
            alt={'Exclusive: All in one commerce platform'}
            width="120"
            priority
          />
        </Link>
      </h1>
      <ul className={styles.list}>
        <li className={styles.item}><CustomLink title={'Home'} href="/" /></li>
        <li className={styles.item}><CustomLink title={'Contact'} href="/contact" /></li>
        <li className={styles.item}><CustomLink title={'About'} href="/about" /></li>
        <li className={styles.item}><CustomLink title={'Sign up'} href="/sign-up" /></li>
      </ul>
      <div className={styles.right}>
        <Search name="productName" placeholder='What are you looking for?' />
        <button aria-label='favorites' className={styles.iconBtn}><Favorite size={3} /></button>
        <button aria-label='cart' className={styles.iconBtn}><Cart size={3} /></button>
      </div>
    </nav>
  )
}