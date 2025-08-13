import type { ReactNode } from "react";
import Navbar from "@/components/navbar/navbar.component";
import '@/global.scss';

type RootLayoutProps = {
  children: ReactNode,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}