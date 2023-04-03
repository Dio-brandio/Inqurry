import React from 'react'

const Searchbar = () => {
  return (
    <>
      <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl top-2 z-index-sticky shadow-none " id="navbarBlur" data-scroll="true">
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm text-white"><a className="opacity-5 text-white" href="">Pages</a></li>
              <li className="breadcrumb-item text-sm active text-white" aria-current="page">Inqurry App</li>
            </ol>
            <h6 className="font-weight-bolder mb-0 text-white">Inqurry App</h6>
          </nav>
          <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group">
                <span className="input-group-text text-body"><i className="fas fa-search"></i></span>
                <input type="text" className="form-control" placeholder="Type here..." />
              </div>
            </div>
            <ul className="navbar-nav ">
              <li className="nav-item d-flex align-items-center">
                <a href="" className="nav-link font-weight-bold px-0 text-white">
                  <i className="fa fa-user me-sm-1"></i>
                  <span className="d-sm-inline d-none">Sign In</span>
                </a>
              </li>
              <li className="nav-item  ps-3 d-flex align-items-center">
                <a className="nav-link text-white p-0 cursor-pointer " id="iconNavbarSidenav">
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line bg-white"></i>
                    <i className="sidenav-toggler-line bg-white"></i>
                    <i className="sidenav-toggler-line bg-white"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <a className="nav-link p-0 text-white">
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                </a>
              </li>
              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <a href="" className="nav-link p-0 text-white" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-bell cursor-pointer"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Searchbar
