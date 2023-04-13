import React from 'react'
import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { extractDataFeilds } from '@/middleware';
const {API_ROUTE} = process.env
const addBranchApi = API_ROUTE+"addBranch"
const updateBranchApi = API_ROUTE+'updateBranch'
const AddBranchForm = ({ isUpdate, id }) => {
    const [selectedBranch, setSelectedBranch] = useState({})
    const [loading, setLoading] = useState(true)

    const nameRef = useRef()
    const numberRef = useRef()
    const emailRef = useRef()
    const addresRef = useRef()

    useEffect(() => {
        if (id != null && id != undefined && isUpdate) {
            console.log("use effect");
            const getBranchByIdApi = API_ROUTE+`getAllBranches?id=${id}`
            fetch(getBranchByIdApi).
                then((p) => p.json()).
                then((data) => setSelectedBranch(data.branches[0][0] == null || data.branches[0][0] == undefined ? {} : data.branches[0][0]))
            setLoading(false)
        }
    }, [id])
    console.log(selectedBranch);
    if (Object.keys(selectedBranch).length > 0 && !loading) {
        nameRef.current.value = selectedBranch.name
        numberRef.current.value = Number(selectedBranch.contact)
        emailRef.current.value = selectedBranch.email
        addresRef.current.value = selectedBranch.address
    }
    const addOrUpdateBranchApiCall = async (update) => {
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

        const formData = extractDataFeilds($("#addBranchForm").serializeArray())
        try {

            const res = await axios.post(update ? (updateBranchApi + id) : addBranchApi, formData)
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
                if (!update) {
                    $("#addBranchForm").trigger("reset")
                }
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
    return (<>
         {loading?<p className='text-primary'>Loading...</p>:null}

        <form className='row p-4 w-lg-50 w-100 p-4  rounded' id='addBranchForm'>

            <div className="form-outline d-flex  text-center mb-4  col-12">
                <input ref={nameRef} type="text" id="name" className="form-control"
                    placeholder="Name" name='name'
                />
            </div>

            <div className="form-outline d-flex  text-center mb-4  col-12">
                <input ref={numberRef} type="number" name='contact' id="contact" className="form-control" placeholder="Mobile" />
            </div>

            <div className="form-outline d-flex  text-center mb-4  col-12">
                <input ref={emailRef} type="email" name='email' id="email" className="form-control" placeholder="Branch Email" />
            </div>

            <div className="form-outline d-flex  text-center mb-4 col-12">
                <textarea ref={addresRef} className="form-control" name='address' id="address" rows="4" placeholder="Enter Branch Address..."></textarea>
            </div>
            <div className="form-outline d-flex  justify-content-center col-12 ">
                <button type="button" onClick={() => { addOrUpdateBranchApiCall(isUpdate) }} className="btn btn-lg btn-primary  btn-block mb-4"
                disabled={isUpdate && !(Object.keys(selectedBranch).length > 0 && !loading)}>
                {loading ? "Loading" : isUpdate ? Object.keys(selectedBranch).length > 0 ? "Update" : "No Branch Found" : "Submit"}
                </button>
            </div>
        </form>
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
    </>
    )
}

export default AddBranchForm