import type { ReactNode } from "react"
import Image from "next/image"
import AuthImage from 'public/authentication.png'
import styles from './authentication.module.scss'

type AuthenticationLayoutProps = {
  children?: ReactNode,
}

export default function AuthenticationLayout({ children }: AuthenticationLayoutProps) {
  return (
    <div className={styles.authentication}>
      <div className={styles.authenticationImage}>
        <Image
          src={AuthImage}
          alt={"Authentication side image"}
          fill
          sizes="calc(50vw - 120px)"
        />
      </div>
      { children }
    </div>
  )
}