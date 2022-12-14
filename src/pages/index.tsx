import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Welcome to ahmann.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span>Hello world</span>
      </main>

    </div>
  )
}

export default Home
