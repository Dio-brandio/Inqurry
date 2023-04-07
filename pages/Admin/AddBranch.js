import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const AdminAddBranch = () => {
    return (
        <>
            <Head>
                <title>Inqury add</title>
            </Head>
            <Layout>
                    <div className="row text-center">

                        <div className="col">

                            <div className="card bg-white ">

                                <div className="card-header bg pb-1 px-3">

                                    <h3 className="mb-0 ">Add Branches</h3>

                                </div>

                                <div className="card-body d-flex  justify-content-center ">
                                    <form className='row p-4 w-lg-50 w-100 p-4  rounded'>

                                        <div className="form-outline d-flex  text-center mb-4  col-12">
                                            <input type="text" id="form4Example1" className="form-control" placeholder="Name" />
                                        </div>


                                        <div className="form-outline d-flex  text-center mb-4  col-12">
                                            <input type="number" id="form4Example1" className="form-control" placeholder="Mobile" />
                                        </div>

                                        <div className="form-outline d-flex  text-center mb-4  col-12">
                                            <input type="email" id="form4Example2" className="form-control" placeholder="Branch Email" />
                                        </div>

                                        <div className="form-outline d-flex  text-center mb-4  col-12">
                                            <input type="text" id="form4Example2" className="form-control" placeholder="Link" />
                                        </div>

                                        <div className="form-outline d-flex  text-center mb-4 col-12">
                                            <input type="email" id="form4Example2" className="form-control" placeholder="Branch Manager's Email" />
                                        </div>

                                        <div className="form-outline d-flex  text-center mb-4 col-12">
                                            <textarea className="form-control" id="form4Example3" rows="4" placeholder="Enter Branch Address..."></textarea>
                                        </div>
                                        <div className="form-outline d-flex  justify-content-center col-12 ">
                                            <button type="submit" className="btn btn-lg btn-primary  btn-block mb-4">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </Layout>
        </>
    )
}

export default AdminAddBranch