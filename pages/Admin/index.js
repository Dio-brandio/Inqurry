import React, { useEffect, useState } from 'react'
import Layout from "@/components/Layout";
import Head from "next/head";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const allInquiresApi = 'http://localhost:3000/api/getAllInquires'
export default function AdminHome({ userPath }) {
  const [allInquies, setAllInquies] = useState(false)

  useEffect(() => {
    axios.get(allInquiresApi).then((data) => setAllInquies(data.data.inquires[0]))
  }, [])
  return (
    <>
      <Head>
        <title>Inqury app</title>
      </Head>
      <Layout>
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">
                        Today's Inquires
                      </p>
                      <h5 className="font-weight-bolder">23</h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">
                          +55%
                        </span>
                        since yesterday
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                      <i
                        className="ni ni-money-coins text-lg opacity-10"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">
                        Today's Joining
                      </p>
                      <h5 className="font-weight-bolder">5</h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">
                          +3%
                        </span>
                        since last week
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                      <i
                        className="ni ni-world text-lg opacity-10"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">
                        New Inquires
                      </p>
                      <h5 className="font-weight-bolder">52</h5>
                      <p className="mb-0">
                        <span className="text-danger text-sm font-weight-bolder">
                          -2%
                        </span>
                        since last quarter
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                      <i
                        className="ni ni-paper-diploma text-lg opacity-10"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">
                        Remainig Inquires
                      </p>
                      <h5 className="font-weight-bolder">56</h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">
                          +5%
                        </span>{" "}
                        than last month
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end">
                    <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                      <i
                        className="ni ni-cart text-lg opacity-10"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3">
          {allInquies ? allInquies.length > 0 ? allInquies.map((item) => {
            return <div className=" col-lg-4 col-md-6 inquiry-card  p-3 " key={item.id}>
              <div className="bg-white border border-dark-50 rounded px-4 py-1 ">
                <div className="project-box">
                  <span className="badge badge-primary">Pending</span>
                  <h4>{item.course.toUpperCase()}</h4>
                  <div className="d-flex align-items-center my-3">
                    <img className="img-10 me-2 w-25 rounded"
                      src="../assets/img/team-1.jpg"
                      alt="image" />
                    <div className="flex-grow-1 mb-0">
                      <p className="fs-5mb-0">{item.fname} {item.lname}</p>
                    </div>
                  </div>
                  <div className="flex-grow-1 mb-3">
                    <p className="mb-0">{item.branchname}</p>
                  </div>
                  <hr className="hr bg-white" />
                  <p>
                    {item.feedback}
                  </p>
                  <div className="row details">
                    <div className="col-6">
                      <span>Inquiry date </span>
                    </div>
                    <div className="col-6 font-primary">{item.inquiry_date.split('T')[0]} </div>
                    <div className="col-6">
                      <span>Next Inquiry</span>
                    </div>
                    <div className="col-6 font-primary">{item.upcoming_date.split('T')[0]} </div>
                    <div className="col-6">
                      <span>Intrested</span>
                    </div>
                    <div className="col-6 font-primary">{item.intrested}</div>
                  </div>
                  <a className="btn btn-primary mt-3" href={`${userPath}/action/update/branch/${item.id}`}>Details</a>
                </div>
              </div>
            </div>
          }) : <h2 className='bg-light rounded'>There Are No Inquires</h2> : <h2>Loding...</h2>}
        </div>
      </Layout>
    </>
  );
}
