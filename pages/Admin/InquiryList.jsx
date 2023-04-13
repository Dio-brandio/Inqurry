import DataTableList from '@/components/DataTableList'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React,{Suspense} from 'react'

const getAllInquiry = "http://localhost:3000/api/getAllInquires"
const AdminInquiryList = () => {
    return (
        <div>
            <Head>
                <title> Add User</title>
            </Head>
            <Layout>

                <div className="row ">
                    <div className="col-12 my-5">
                        <div className="card rounded">
                            <div className="card-header text-center p-3">
                                <h3 className="mb-0">List Of Inquires</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-5">
                    <div className="card rounded">
                            <div className="card-header text-center p-3">
                                <Suspense fallback={"lading..."}>
                              <DataTableList id="inquiryTable" api={getAllInquiry} 
                              apifield ={"inquires"}
                              columns={["fname","lname","contact","email","refrence","inquiry_date","upcoming_date","course","created_at","intrested","branchname"]}/>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}

export default AdminInquiryList