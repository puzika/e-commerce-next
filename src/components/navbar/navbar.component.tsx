'use client';

import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthState from '@/lib/auth-state-observe';
import Image from 'next/image';
import Logo from 'public/logo.svg';
import Link from 'next/link';
import CustomLink from '../custom-link/custom-link.component';
import Search from '../search/search.component';
import Favorite from '../favorite/favorite.component';
import Cart from '../cart/cart,component';
import Dropdown from '../dropdown/dropdown.component';
import { VscAccount } from 'react-icons/vsc';
import { GoSignOut } from 'react-icons/go';
import { 
  HOME_ROUTE, 
  CONTACTS_ROUTE, 
  SIGN_UP_ROUTE, 
  SIGN_IN_ROUTE,
  ABOUT_ROUTE, 
  PROFILE_ROUTE,
  SESSION_COOKIE_NAME
} from '@/lib/constants';
import { signOut } from '@/lib/authentication';
import { updateSession } from '@/lib/session';
import { useCookies } from 'next-client-cookies';
import clsx from 'clsx';
import styles from './navbar.module.scss';

export default function Navbar() {
  const router = useRouter();
  const cookies = useCookies();
  const user = useAuthState();
  const userSignedIn = !!cookies.get(SESSION_COOKIE_NAME);
  const ref = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(()  => {
    const handleClick = (e: PointerEvent) => {
      if (ref.current && ref.current.contains(e.target as Node)) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClick);

    if (user && !userSignedIn) signOut();
    else updateSession();

    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  }

  const signedInProfileItems = (
    <>
      <li><Link href={PROFILE_ROUTE}>Edit profile</Link></li>
      <li>
        <button onClick={handleSignOut}>
          <GoSignOut />
          <span>Sign out</span>
        </button>
      </li>
    </>
  );

  return (
    <nav className={styles.navbar}>
      <h1>
        <Link className={styles.logo} href={HOME_ROUTE}>
          <Image 
            src={Logo} 
            alt={'Exclusive: All in one commerce platform'}
            width="120"
            priority
          />
        </Link>
      </h1>
      <ul className={styles.list}>
        <li className={styles.item}><CustomLink title={'Home'} href={HOME_ROUTE} /></li>
        <li className={styles.item}><CustomLink title={'Contacts'} href={CONTACTS_ROUTE} /></li>
        <li className={styles.item}><CustomLink title={'About'} href={ABOUT_ROUTE} /></li>
        {
          userSignedIn ?
            <li className={styles.item}><CustomLink title={'Account'} href={PROFILE_ROUTE} /></li> :
            <li className={styles.item}><CustomLink title={'Sign up'} href={SIGN_UP_ROUTE} /></li>
        }
      </ul>
      <div className={styles.right}>
        <Search name="productName" placeholder='What are you looking for?' />
        <button aria-label='favorites' className={styles.iconBtn}><Favorite size={3} /></button>
        <button aria-label='cart' className={styles.iconBtn}><Cart size={3} /></button>
        <Dropdown
          open={open}
          content={
            <button 
              aria-label='account' 
              ref={ref}
              className={clsx(styles.iconBtn, styles.iconAccount)}
            >
              <VscAccount />
            </button>
          }
        >
          <li><Link href={SIGN_UP_ROUTE}>Sign up</Link></li>
          <li><Link href={SIGN_IN_ROUTE}>Sign in</Link></li>
          { userSignedIn && signedInProfileItems }
        </Dropdown>
      </div>
    </nav>
  )
}