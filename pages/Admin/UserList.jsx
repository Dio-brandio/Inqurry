import DataTableList from '@/components/DataTableList'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React,{Suspense} from 'react'

const getAllUsers = "http://localhost:3000/api/getAllUsers"
const AdminUserList = () => {
    return (
        <div>
            <Head>
                <title> Add User</title>
            </Head>
            <Layout>

                <div className="row">
                    <div className="col-12 my-5">
                        <div className="card rounded">
                            <div className="card-header text-center pb-0 px-3">
                                <h3 className="mb-0">List Of inquires</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-5">
                    <div className="card rounded">
                            <div className="card-header text-center pb-0 px-3">
                                <Suspense fallback={"lading..."}>
                              <DataTableList id="usersTable" api={getAllUsers} 
                              apifield ={"users"}
                              columns={["fname","lname","email","contact","branchname","created_at","role","createdBy"]}/>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}

export default AdminUserList