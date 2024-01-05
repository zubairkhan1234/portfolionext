'use client'
import { useEffect } from 'react';
import { Poppins } from 'next/font/google'
import './globals.css'
// import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight:"500"
})

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
