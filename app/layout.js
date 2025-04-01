import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/component/Header/Header";
import SmoothScrolling from "@/components/component/SmoothScroll";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vuln-VANGUARD",
  description: "<<Trust Nothing, Secure Everything>>",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/logo.webp" />

      <body className={inter.className}>
        <SmoothScrolling>
          <Header />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
