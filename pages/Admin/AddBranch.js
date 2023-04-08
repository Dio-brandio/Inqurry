import Layout from '@/components/Layout'
import Head from 'next/head'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const addBranchApi ="http://localhost:3000/api/addBranch"
const AdminAddBranch = () => {
    const addBranchApiCall = async () => {
        if (!formValidation()) { 
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
        const name = $("#name").val()
        const contact = $("#contact").val()
        const address = $("#address").val()
        const email = $("#email").val()

        try {
            const res = await axios.post(addBranchApi, {
                name,
                contact,
                address,
                email
            })
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
                $("#addBranchForm").trigger("reset")
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
            toast.error("There Is Some Error In Server Side " + error.message, {
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
        for (let i = 0; i < $("#addBranchForm input").length; i++) {
            const ele = $("#addBranchForm input")[i];
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
                                <form className='row p-4 w-lg-50 w-100 p-4  rounded' id='addBranchForm'>
                                    <div className="form-outline d-flex  text-center mb-4  col-12">
                                        <input type="text" id="name" className="form-control" placeholder="Name" />
                                    </div>

                                    <div className="form-outline d-flex  text-center mb-4  col-12">
                                        <input type="number" id="contact" className="form-control" placeholder="Mobile" />
                                    </div>

                                    <div className="form-outline d-flex  text-center mb-4  col-12">
                                        <input type="email" id="email" className="form-control" placeholder="Branch Email" />
                                    </div>

                                    <div className="form-outline d-flex  text-center mb-4 col-12">
                                        <textarea className="form-control" id="address" rows="4" placeholder="Enter Branch Address..."></textarea>
                                    </div>
                                    <div className="form-outline d-flex  justify-content-center col-12 ">
                                        <button type="button" onClick={addBranchApiCall} className="btn btn-lg btn-primary  btn-block mb-4">Submit</button>
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