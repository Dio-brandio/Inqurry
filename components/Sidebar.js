import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <>
            <header className="header d-flex gap-3 align-items-center" id="header">
                <div className="username">
                    <b>Peter griffin</b>
                </div>
                <div className="header_img"> <img src="https://pbs.twimg.com/profile_images/2959799296/8adc8e7914393f0716a18e133e217dd9_400x400.jpeg" className='rounded' alt="" /> </div>
            </header>
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div className=''>
                        <i className='bx bx-chevron-right nav_logo-icon fs-2 ps-3' id="header-toggle"></i>
                    </div>
                    <div>
                        <Link href="/" className="nav_logo">
                            <i className='bx bx-layer nav_logo-icon'></i>
                            <span className="nav_logo-name">BBBootstrap</span>
                        </Link>
                        <div className="nav_list">
                            <Link href="/" className="nav_link active">
                                <i className='bx bx-grid-alt nav_icon'></i>
                                <span className="nav_name">Dashboard</span>
                            </Link>
                            <Link href="/branches" className="nav_link">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">branches</span>
                            </Link>
                            <Link href="/employees" className="nav_link">
                                <i className='bx bx-message-square-detail nav_icon'></i>
                                <span className="nav_name">employees</span>
                            </Link>
                            <Link href="#" className="nav_link">
                                <i className='bx bx-bookmark nav_icon'></i>
                                <span className="nav_name">Bookmark</span>
                            </Link>
                            <Link href="#" className="nav_link">
                                <i className='bx bx-folder nav_icon'></i>
                                <span className="nav_name">Files</span>
                            </Link>
                            <Link href="#" className="nav_link">
                                <i className='bx bx-bar-chart-alt-2 nav_icon'></i>
                                <span className="nav_name">Stats</span>
                            </Link>
                            <div>
                                <Link href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Sidebar