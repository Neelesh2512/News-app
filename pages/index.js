import Head from 'next/head'
import Image from 'next/image'
import { Toolbar } from '../components/toolbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <div className='page-container'>
    <Toolbar />
      <div className={styles.main}>
        <h1>News App</h1>

        <h3>Your one stop app for the latest news</h3>
        <h4>Made in India with love.</h4>
      </div>
    </div>
  );
}
