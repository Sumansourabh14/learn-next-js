import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn Next.JS | Home</title>
      </Head>

      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>I just completed the whole tutorial, if you are here to check the quality of the course and have any doubts about going through it, Don't have any doubts, just GO and DO IT, the course is easy, complete and you will definitely make you know next.js in a good depth to start making your own projects.</p>
        <Link href="/lists/list" className={styles.btn}>See the list</Link>
      </div>
    </>
  )
}
