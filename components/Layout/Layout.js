import Head from 'next/head'

import styles from 'components/Layout/Layout.module.css'

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        { children }
      </div>
    </>
  )
}