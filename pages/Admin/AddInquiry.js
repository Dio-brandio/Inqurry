import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const AddInquiry = () => {
    return (
        <>
            <Head>
                <title>Inqury add</title>
            </Head>
            <Layout>
                <div className="row">

                    <div className="col">

                        <div className="card">

                            <div className="card-header text-center pb-0 px-3">

                                <h3 className="mb-0">Add Inquiry</h3>

                            </div>

                            <div className="card-body pt-4 p-3">

                                <form className="form-card">

                                    <div className="row">

                                        <div className="col-3">

                                            <div>

                                                <label className="form-label d-flex justify-content-center mt-2" htmlFor="form6Example1">Id Proof

                                                    Photo</label>

                                                <div className="d-flex justify-content-center mt-0 mb-4">
                                                    <img src="../assets/img/team-2.jpg" className="rounded-circle w-100" alt="example placeholder" />
                                                </div>

                                                <div className="d-flex justify-content-center">

                                                    <div className="btn btn-primary btn-rounded">

                                                        <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>

                                                        <input type="file" className="form-control d-none" id="customFile2" />

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="col-9">

                                            <div className="row">

                                                <div className="col-5 mb-3">

                                                    <div className="form-outline">

                                                        <label className="form-label" htmlFor="form6Example1">First name<span className="text-danger"> *</span></label>

                                                        <input type="text" id="form6Example1" className="form-control" />

                                                    </div>

                                                </div>

                                                <div className="col-5 mb-3">

                                                    <div className="form-outline">

                                                        <label className="form-label" htmlFor="form6Example2">Last name<span className="text-danger"> *</span></label>

                                                        <input type="text" id="form6Example2" className="form-control" />

                                                    </div>

                                                </div>

                                                <div className="col-5 mb-3">

                                                    <div className="form-outline">

                                                        <label className="form-label" htmlFor="form6Example2">Mobile<span className="text-danger"> *</span></label>

                                                        <input type="text" id="form6Example3" className="form-control" />

                                                    </div>

                                                </div>

                                                <div className="col-5 mb-3">

                                                    <div className="form-outline">

                                                        <label className="form-label" htmlFor="form6Example1">Email<span className="text-danger"> *</span></label>

                                                        <input type="email" id="form6Example1" className="form-control" />

                                                    </div>

                                                </div>

                                                <div className="col-5 mb-3">

                                                    <div className="dropdown ">

                                                        <div><label className="form-label" htmlFor="form6Example2">Reference By<span
                                                            className="text-danger">*</span></label>

                                                        </div>

                                                        <select className="form-select" aria-label="Default select example">

                                                            <option defaultValue>---Select---</option>

                                                            <option value="1">One</option>

                                                            <option value="2">Two</option>

                                                            <option value="3">Three</option>

                                                        </select>

                                                    </div>

                                                </div>

                                                <div className="col-5 mb-3">

                                                    <div className="dropdown mx-0">

                                                        <div><label className="form-label" htmlFor="form6Example2">Select Branch<span className="text-danger">*</span></label></div>

                                                        <select className="form-select" aria-label="Default select example">

                                                            <option defaultValue>---Select---</option>

                                                            <option value="1">One</option>

                                                            <option value="2">Two</option>

                                                            <option value="3">Three</option>

                                                        </select>

                                                    </div>

                                                </div>

                                                <div className="col-5  mb-3">

                                                    <label className="form-label" htmlFor="form6Example2">Inquiry Date<span className="text-danger"> *</span></label>

                                                    <input type="date" id="form6Example2" className="form-control" />

                                                </div>

                                                <div className="col-5 mb-3">

                                                    <label className="form-label" htmlFor="form6Example2">Upcoming Date<span className="text-danger">
                                                        *</span></label>

                                                    <input type="date" id="form6Example2" className="form-control" />

                                                </div>

                                                <div className="col-5 mb-3">

                                                    <div className="form-outline">

                                                        <label className="form-label" htmlFor="form6Example1">Courses<span className="text-danger"> *</span></label>

                                                        <input type="text" id="form6Example1" className="form-control" />

                                                    </div>

                                                </div>

                                                <div className="col-5 mb-3">

                                                    <div className="form-outline">

                                                        <label className="form-label" htmlFor="form6Example1">Feedback<span className="text-danger"> *</span></label>

                                                        <textarea type="text" id="form6Example1" className="form-control"></textarea>

                                                    </div>

                                                </div>

                                                <div className="row">

                                                    <div className="col mt-2">

                                                        <div className="">

                                                            <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

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

export default AddInquiry