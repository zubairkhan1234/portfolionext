'use client'
import { useEffect } from 'react';
import './globals.css'
// import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
