import Head from 'next/head'
import styles from '../pages/styles/style.module.scss';

import HeaderNav from '../components/HeaderNav'

export default function MainContainer({ children, keywords, titels }) {
  return (
    <>
      <Head>
        <meta name="keywords" content={"nextjs, alexname main page" + keywords}></meta>
        <title>{titels}</title>
        <link rel="icon" href="../logo/favicon.png" type="image/x-icon" />
      </Head>
      <div className={styles.headerBlock}>
        <HeaderNav />
      </div>
      <div>{children}</div>
    </>
  )
}
