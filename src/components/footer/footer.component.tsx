import styles from './footer.module.scss';
import Logo from 'public/logo-white.svg';
import Link from 'next/link';
import Image from 'next/image';
import CustomLink from '../custom-link/custom-link.component';
import SocialMedia from '../social-media/social-media.component';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} href={'/'}>
        <Image 
          src={Logo} 
          alt={'Logo'}
          width="150"
        />
      </Link>
      <nav>
        <ul className={styles.list}>
          <li><CustomLink href="#" title={"Home"} /></li>
          <li><CustomLink href="#" title={"Contact"} /></li>
          <li><CustomLink href="#" title={"About"} /></li>
          <li><CustomLink href="#" title={"Sign up"} /></li>
          <li><CustomLink href="#" title={"Categories"} /></li>
        </ul>
      </nav>
      <SocialMedia />
      <p className={styles.copyright}>&copy;2025 by Latipov Tolibjon. All rights reserved.</p>
    </footer>
  )
}