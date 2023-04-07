import Head from 'next/head'
import React from 'react'
import AdminAddUser from '../Admin/AddUser'

const ManagerAddUser = () => {
    return (
        <>
            <Head>
                <title>Add User</title>
            </Head>
            <AdminAddUser />
        </>
    )
}

export default ManagerAddUser