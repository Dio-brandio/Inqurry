import DataTableList from '@/components/DataTableList'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React,{Suspense} from 'react'

const getAllBranches = "http://localhost:3000/api/getAllBranches"
const AdminBranchList = () => {
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
                              <DataTableList id="branchesTable" api={getAllBranches} 
                              apifield ={"branches"}
                              columns={["name","email","contact","address","created_at"]}/>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}

export default AdminBranchList