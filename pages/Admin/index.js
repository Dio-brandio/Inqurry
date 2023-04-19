import React, { useEffect, useState,Suspense  } from 'react'
import Layout from "@/components/Layout";
import Head from "next/head";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import InquiryCard from '@/components/InquiryCard';
import { useRouter } from 'next/router';


      
const allInquiresApi = process.env.API_ROUTE+'getAllInquires'
export default function AdminHome(props) {
  const router = useRouter()
  const [allInquies, setAllInquies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const setInquires =async()=>{
      const data =await axios.get(allInquiresApi)
      setAllInquies(data.data.inquires[0])
      setLoading(false)
    }
    setInquires()
  }, [router.pathname])
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
        <Suspense fallback={<h3>Loading</h3>}>
          { !loading?allInquies.length > 0 ? allInquies.map((item) => {
            return <InquiryCard item={item} key={item.id} {...props}/>
          }) : <h2 className='bg-light rounded'>There Are No Inquires</h2>:<h3>Loading...</h3> }
            </Suspense>
        </div>
      </Layout>
    </>
  );
}
