import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>National Communications Facilitator</title>
        <meta
          property="og:title"
          content="National Communications Facilitator"
        />
      </Helmet>
    </div>
  )
}

export default Home
