import type { ReactNode } from "react";
import Navbar from "@/components/navbar/navbar.component";
import '@/global.scss';
import styles from './layout.module.scss';

type RootLayoutProps = {
  children: ReactNode,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={styles.wrapper}>
          {children}
        </div>
      </body>
    </html>
  )
}