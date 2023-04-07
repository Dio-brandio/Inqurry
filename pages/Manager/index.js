import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import AdminHome from '../Admin/index.js'

const HomeManager = () => {
  return (
    <>
    <Head>
        <title>Manger</title>
      </Head>
        <AdminHome/>
    </>
  )
}

export default HomeManager