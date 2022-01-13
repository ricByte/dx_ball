import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Field} from "../components/Field/Field";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Field/>
      </main>
    </div>
  )
}
