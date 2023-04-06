import Layout from "@/components/Layout";
import Searchbar from "@/components/Searchbar";
import Head from "next/head";

export default function Home() {
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
          <div className=" col-lg-4 col-md-6 inquiry-card  p-3 ">
            <div className="bg-white border border-dark-50 rounded px-4 py-1 ">
              <div className="project-box">
                <span className="badge badge-primary">Pending</span>
                <h4>Website Designing</h4>
                <div className="d-flex align-items-center my-3">
                  <img
                    className="img-10 me-2 w-25 rounded"
                    src="../assets/img/team-1.jpg"
                    alt="image"
                  />
                  <div className="flex-grow-1 mb-0">
                    <p className="fs-5mb-0">Lois griffin</p>
                  </div>
                </div>
                <div className="flex-grow-1 mb-3">
                  <p className="mb-0">Nikol , Ahmedabad </p>
                </div>
                <hr className="hr bg-white" />
                <p>
                  Inqiury For webdesigning course and programming languages
                </p>
                <div className="row details">
                  <div className="col-6">
                    <span>Inquiry date </span>
                  </div>
                  <div className="col-6 font-primary">12/02/2023 </div>
                  <div className="col-6">
                    <span>Next Inquiry</span>
                  </div>
                  <div className="col-6 font-primary">19/02/2023</div>
                  <div className="col-6">
                    <span>Intrested</span>
                  </div>
                  <div className="col-6 font-primary">Yes</div>
                </div>
                <button className="btn btn-primary mt-3">Details</button>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 inquiry-card  p-3 ">
            <div className="bg-white border border-dark-50 rounded px-4 py-1 ">
              <div className="project-box">
                <span className="badge badge-primary">Pending</span>
                <h4>Website Designing</h4>
                <div className="d-flex align-items-center my-3">
                  <img
                    className="img-10 me-2 w-25 rounded"
                    src="../assets/img/team-1.jpg"
                    alt="image"
                  />
                  <div className="flex-grow-1 mb-0">
                    <p className="fs-5mb-0">Lois griffin</p>
                  </div>
                </div>
                <div className="flex-grow-1 mb-3">
                  <p className="mb-0">Nikol , Ahmedabad </p>
                </div>
                <hr className="hr bg-white" />
                <p>
                  Inqiury For webdesigning course and programming languages
                </p>
                <div className="row details">
                  <div className="col-6">
                    <span>Inquiry date </span>
                  </div>
                  <div className="col-6 font-primary">12/02/2023 </div>
                  <div className="col-6">
                    <span>Next Inquiry</span>
                  </div>
                  <div className="col-6 font-primary">19/02/2023</div>
                  <div className="col-6">
                    <span>Intrested</span>
                  </div>
                  <div className="col-6 font-primary">Yes</div>
                </div>
                <button className="btn btn-primary mt-3">Details</button>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 inquiry-card  p-3 ">
            <div className="bg-white border border-dark-50 rounded px-4 py-1 ">
              <div className="project-box">
                <span className="badge badge-primary">Pending</span>
                <h4>Website Designing</h4>
                <div className="d-flex align-items-center my-3">
                  <img
                    className="img-10 me-2 w-25 rounded"
                    src="../assets/img/team-1.jpg"
                    alt="image"
                  />
                  <div className="flex-grow-1 mb-0">
                    <p className="fs-5mb-0">Lois griffin</p>
                  </div>
                </div>
                <div className="flex-grow-1 mb-3">
                  <p className="mb-0">Nikol , Ahmedabad </p>
                </div>
                <hr className="hr bg-white" />
                <p>
                  Inqiury For webdesigning course and programming languages
                </p>
                <div className="row details">
                  <div className="col-6">
                    <span>Inquiry date </span>
                  </div>
                  <div className="col-6 font-primary">12/02/2023 </div>
                  <div className="col-6">
                    <span>Next Inquiry</span>
                  </div>
                  <div className="col-6 font-primary">19/02/2023</div>
                  <div className="col-6">
                    <span>Intrested</span>
                  </div>
                  <div className="col-6 font-primary">Yes</div>
                </div>
                <button className="btn btn-primary mt-3">Details</button>
              </div>
            </div>
          </div>
      
        </div>
      </Layout>
    </>
  );
}
