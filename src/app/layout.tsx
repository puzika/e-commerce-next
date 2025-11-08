import type { ReactNode } from "react";
import Navbar from "@/components/navbar/navbar.component";
import Footer from "@/components/footer/footer.component";
import { CookiesProvider } from "next-client-cookies/server";
import '@/global.scss';
import styles from './layout.module.scss';

type RootLayoutProps = {
  children: ReactNode,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>
          <Navbar />
        </CookiesProvider>
        <div className={styles.wrapper}>
          {children}
        </div>
        <CookiesProvider>
          <Footer />
        </CookiesProvider>
      </body>
    </html>
  )
}