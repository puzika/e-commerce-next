import Link from 'next/link';
import styles from './custom-link.module.scss';

type CustomLinkProps = {
  title?: string,
  href: string,
}

export default function CustomLink({ title, href }: CustomLinkProps) {
  return (
    <Link className={styles.link} href={href}>{title}</Link>
  )
}