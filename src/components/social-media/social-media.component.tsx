import { FaXTwitter, FaInstagram } from "react-icons/fa6"
import { FaTelegramPlane } from "react-icons/fa"
import Link from "next/link"
import styles from './social-media.module.scss'

export default function SocialMedia() {
  return (
    <ul className={styles.socialMedia}>
      <li>
        <Link className={styles.socialMediaLink} aria-label='twitter' href="#">
          <FaXTwitter />
        </Link>
      </li>
      <li>
        <Link className={styles.socialMediaLink} aria-label='telegram' href="#">
          <FaTelegramPlane />
        </Link>
      </li>
      <li>
        <Link className={styles.socialMediaLink} aria-label='instagram' href="#">
          <FaInstagram />
        </Link>
      </li>
    </ul>
  )
}