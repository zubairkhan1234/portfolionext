'use client'
import { useEffect } from 'react';
import './globals.css'
import 'bootstrap/dist/js/bootstrap.min.js';

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined')
      require('bootstrap/dist/js/bootstrap.min.js')
  }, [])
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
