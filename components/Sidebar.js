import React from 'react'

const Sidebar = () => {
    return (
        <>
            <header className="header d-flex gap-3 align-items-center" id="header">
                <div className="username">
                   <b>Peter griffin</b> 
                </div>
                <div className="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" className='rounded' alt="" /> </div>
            </header>
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div className=''>
                        <i className='bx bx-chevron-right nav_logo-icon fs-2 ps-3' id="header-toggle"></i>
                    </div>
                    <div>
                        <a href="#" className="nav_logo">
                            <i className='bx bx-layer nav_logo-icon'></i>
                            <span className="nav_logo-name">BBBootstrap</span>
                        </a>
                        <div className="nav_list">
                            <a href="#" className="nav_link active">
                                <i className='bx bx-grid-alt nav_icon'></i>
                                <span className="nav_name">Dashboard</span>
                            </a>
                            <a href="#" className="nav_link">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">Users</span>
                            </a> <a href="#" className="nav_link">
                                <i className='bx bx-message-square-detail nav_icon'></i>
                                <span className="nav_name">Messages</span>
                            </a>
                            <a href="#" className="nav_link">
                                <i className='bx bx-bookmark nav_icon'></i>
                                <span className="nav_name">Bookmark</span>
                            </a>
                            <a href="#" className="nav_link">
                                <i className='bx bx-folder nav_icon'></i>
                                <span className="nav_name">Files</span>
                            </a>
                            <a href="#" className="nav_link">
                                <i className='bx bx-bar-chart-alt-2 nav_icon'></i>
                                <span className="nav_name">Stats</span>
                            </a>
                        </div>
                    </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>

                </nav>
            </div>
        </>
    )
}

export default Sidebar