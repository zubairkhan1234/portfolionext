import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'


import Navigation from '../component/Navigation'
import HomeComp from '../component/Home'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <div className={styles.container}>
          <HomeComp />
        </div>
      </main>
    </>
  )
}
