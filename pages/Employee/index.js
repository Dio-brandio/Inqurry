import Head from 'next/head'
import React from 'react'
import AdminHome from '../Admin'

const EmployeeHome = () => {
  return (
    <>
       <Head>
        <title>Employee</title>
      </Head>
        <AdminHome/>
    </>
  )
}

export default EmployeeHome