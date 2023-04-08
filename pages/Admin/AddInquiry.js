import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { jwtVerify } from 'jose'
import Cookies from 'js-cookie'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import { extractDataFeilds } from '@/middleware'
import axios from 'axios'


const allBranchApi = 'http://localhost:3000/api/getAllBranches';
const addInquiryApi = 'http://localhost:3000/api/addInquiry';

const AdminAddInquiry = ({ token }) => {
    const [user, setUser] = useState(null)
    const [allbranches, setAllBranches] = useState([])

    useEffect(() => {
        jwtVerify(Cookies.get('authtoken'), new TextEncoder().encode(process.env.JWT_SECRET)).
            then((data) => setUser(data.payload))
    }, [])

    useEffect(() => {
        fetch(allBranchApi, {
            headers: {
                "Content-Type": "application/json",
                "cookie": "authtoken=" + Cookies.get("authtoken")
            }
        }).then((p) => p.json()).
            then((data) => {
                if (data.ok) {
                    setAllBranches(data.branches)
                }
            })
    }, [])

    const addInquiryApiCall = async () => {
        console.log(formValidation());
        if (!formValidation()) {
            console.log(`enter`);
            toast.warn('Fill All The Required Values !', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return
        }
        const formData = extractDataFeilds($("#addInquiryForm").serializeArray())
        formData.addedBy = user.uid
        console.log(formData);

        try {
            const res = await axios.post(addInquiryApi, formData)
            if (res.data.ok) {
                toast.success(res.data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                $("#addInquiryForm").trigger("reset")
            } else {
                toast.error(res.data.message, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            toast.error("There Is Some Error  " + error.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


    }
    const formValidation = () => {
        for (let i = 0; i < $("#addInquiryForm input").length; i++) {
            const ele = $("#addInquiryForm input")[i];
            if (ele.type == "text" || ele.type == "email" || ele.type == "password" || ele.type == "number") {
                if ($(ele).val() == null || $(ele).val() == '' || $(ele).val() == ' ' || $(ele).val() == undefined) {
                    ele.focus()
                    return false
                }
            }
        }
        return true
    }


    return (
        <>
            <Head>
                <title>Inqury add</title>
            </Head>
            <Layout>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    limit={1}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center pb-0 px-3">
                                <h3 className="mb-0">Add Inquiry</h3>
                            </div>

                            <div className="card-body pt-4 p-3">
                                <form className="form-card" id='addInquiryForm'>
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
                                                        <label className="form-label" htmlFor="fname">First name<span className="text-danger"> *</span></label>
                                                        <input type="text" id="fname" name='fname' className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-5 mb-3">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="lname">Last name<span className="text-danger"> *</span></label>
                                                        <input type="text" id="lname" name='lname' className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-5 mb-3">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="contact">Mobile<span className="text-danger"> *</span></label>
                                                        <input type="text" id="contact" name='contact' className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-5 mb-3">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="email">Email<span className="text-danger"> *</span></label>
                                                        <input type="email" id="email" name='email' className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-5 mb-3">
                                                    <div className="dropdown ">
                                                        <div><label className="form-label" htmlFor="form6Example2">Reference By<span
                                                            className="text-danger">*</span></label>
                                                        </div>
                                                        <input type="text" id="reference" name='refrence' className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-5 mb-3">
                                                    <div className="dropdown mx-0">
                                                        <div><label className="form-label" htmlFor="form6Example2">Select Branch<span className="text-danger">*</span></label></div>
                                                        <select className="form-select" aria-label="Default select example" name='branchid' id='branchid'>
                                                            {allbranches.length >= 1 ? allbranches.map((branch) => {
                                                                return <option value={branch.id} key={branch.id}>{branch.name}</option>
                                                            }) : null}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-5  mb-3">
                                                    <label className="form-label" htmlFor="form6Example2">Inquiry Date<span className="text-danger"> *</span></label>
                                                    <input type="date" id="inquiry_date" name='inquiry_date' className="form-control" />
                                                </div>

                                                <div className="col-5 mb-3">
                                                    <label className="form-label" htmlFor="upcoming_date">Upcoming Date<span className="text-danger">
                                                        *</span></label>
                                                    <input type="date" id="upcoming_date" name='upcoming_date' className="form-control" />
                                                </div>

                                                <div className="col-5 mb-3">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form6Example1">Courses<span className="text-danger"> *</span></label>
                                                        <input type="text" id="course" name='course' className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-5 mb-3">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="form6Example1">Feedback<span className="text-danger"> *</span></label>
                                                        <textarea type="text" id="feedback" name='feedback' className="form-control"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-5 mb-3">
                                                    <div className="dropdown mx-0">
                                                        <div>
                                                            <label className="form-label" htmlFor="form6Example2">
                                                                 Intrested
                                                                 <span className="text-danger">*</span>
                                                            </label>
                                                        </div>
                                                        <select className="form-select" aria-label="Default select example" name='intrested' id='intrested'>
                                                            <option value='yes' >Yes</option>
                                                            <option value='no' >Yes</option>
                                                            <option value='later' >later</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col mt-2">
                                                        <div className="">
                                                            <button type="button" onClick={addInquiryApiCall} className="btn btn-primary btn-block mb-4">Submit</button>
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

export default AdminAddInquiry