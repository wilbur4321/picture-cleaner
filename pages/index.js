import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

import NumPictures from './_num_pictures'

export default function Home() {
  return (
    // React.createElement("h1", { style: { color: "blue" } }, "Hello, world!")
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <NumPictures count="10" />
        </h1>
      </main>
    </div>
  );
}
