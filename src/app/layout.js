'use client'
import { useEffect } from 'react';
import { Poppins, Playfair_Display } from 'next/font/google'
// import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: "500"
})
const playfair_Display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-Playfair',
  display: 'swap',
  weight: "500"
})

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en" className={`${poppins.variable} ${playfair_Display.variable}`} >
      <body>{children}</body>
    </ html>
  )
}
