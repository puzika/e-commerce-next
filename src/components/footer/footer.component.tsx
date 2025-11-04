'use client';

import useAuthState from '@/lib/auth-state-observe';
import Logo from 'public/logo-white.svg';
import Link from 'next/link';
import Image from 'next/image';
import CustomLink from '../custom-link/custom-link.component';
import SocialMedia from '../social-media/social-media.component';
import { 
  HOME_ROUTE, 
  CONTACTS_ROUTE, 
  ABOUT_ROUTE, 
  SIGN_UP_ROUTE, 
  CATEGORIES_ROUTE,
  PROFILE_ROUTE
} from '@/lib/constants';
import styles from './footer.module.scss';

export default function Footer() {
  const user = useAuthState();

  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} href={HOME_ROUTE}>
        <Image 
          src={Logo} 
          alt={'Logo'}
          width="150"
        />
      </Link>
      <nav>
        <ul className={styles.list}>
          <li><CustomLink href={HOME_ROUTE} title={'Home'} /></li>
          <li><CustomLink href={CONTACTS_ROUTE} title={'Contacts'} /></li>
          <li><CustomLink href={ABOUT_ROUTE} title={'About'} /></li>
          <li><CustomLink href={CATEGORIES_ROUTE} title={'Categories'} /></li>
          {
            user ?
              <li className={styles.item}><CustomLink title={'Account'} href={PROFILE_ROUTE} /></li> :
              <li className={styles.item}><CustomLink title={'Sign up'} href={SIGN_UP_ROUTE} /></li>
          }
        </ul>
      </nav>
      <SocialMedia />
      <p className={styles.copyright}>&copy;2025 by Latipov Tolibjon. All rights reserved.</p>
    </footer>
  )
}