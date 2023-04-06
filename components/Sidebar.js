import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ps" id="sidenav-main">
                <div className="sidenav-header">
                    <Link className="navbar-brand m-0 d-flex align-items-center justify-content-around" href="/Admin" >
                        <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold">Inquiry App</span>
                        <i className="ni ni-fat-remove fs-2" id='closeSideNav'></i>
                    </Link>
                   
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse w-auto ps ps--active-y" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item text-center">
                            <Link className="nav-link " href="/Admin">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link " href="/Admin/AddInquiry">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-fat-add text-success text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Add Inquiry</span>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link " href="/Admin/AddBranch">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-fat-add text-success text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Add Branch</span>
                            </Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link " href="/Admin/AddUser">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-fat-add text-success text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Add User</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar