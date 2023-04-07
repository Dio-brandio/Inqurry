import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Sidebar = () => {
    const router = useRouter()
    const isAdmin=router.pathname.includes("/Admin")
    const isManager=router.pathname.includes("/Manager")
    const userPath=isAdmin?"Admin":isManager?"Manager":"Employee"

    const logout = () => {
        Cookies.remove("authtoken")
        toast.error('Logged Out', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setTimeout(() => {
                router.push('/login')
            }, 1000);
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ps" id="sidenav-main">
                <div className="sidenav-header d-flex gap-3 align-items-center">
                    <Link className="navbar-brand m-0 d-flex align-items-center justify-content-around" href={`/${userPath}`} >
                        <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold">Inquiry App</span>
                    </Link>
                    <i className="ni ni-fat-remove fs-1 cursor-pointer" id='closeSideNav'></i>

                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse w-auto ps ps--active-y" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item text-center">
                            <Link className="nav-link " href={`/${userPath}`}>
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link " href={`/${userPath}/AddInquiry`}>
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-fat-add text-success text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Add Inquiry</span>
                            </Link>
                        </li>
                        { isAdmin?<li className="nav-item text-center">
                            <Link className="nav-link " href={`/${userPath}/AddBranch`}>
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-fat-add text-success text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Add Branch</span>
                            </Link>
                        </li>:null}
                        
                        {isAdmin||isManager?<li className="nav-item text-center">
                            <Link className="nav-link " href={`/${userPath}/AddUser`}>
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-fat-add text-success text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Add User</span>
                            </Link>
                        </li>:null}
                        <li className="nav-item text-center my-5">
                            <button className="btn btn-danger " onClick={logout}>
                                <span className="nav-link-text ms-1">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar