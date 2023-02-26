import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import IntroContainer from '../components/IntroContainer'

import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>박현우 포트폴리오</title>
        <meta name="description" content="매일 성장하는 프론트엔드 개발자가 되겠습니다. 박현우 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <IntroContainer />
      </div>
    </>
  )
}
