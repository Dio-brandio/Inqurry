import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";

const allBranchApi = 'http://localhost:3000/api/getAllBranches';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [allbranches, setAllBranches] = useState(false)

  useEffect(() => {
      fetch(allBranchApi).then((p)=>p.json()).then((data) => {
        if (data.ok) {
            setAllBranches(data.branches[0])
        }else{
          setAllBranches(false)
        }
      })
  }, [router.pathname])
  const isAdmin = router.pathname.includes("/Admin")
  const isManager = router.pathname.includes("/Manager")
  const isEmployee = router.pathname.includes("/Employee")
  let userPath;
  if (isAdmin) {
    userPath = "Admin"
  } else if (isManager) {
    userPath = "Manager"
  }
  else if (isEmployee) {
    userPath = "Employee"
  }
  const token = isAdmin || isManager || isEmployee ? Cookies.get('authtoken') : null;

  return (
    <>
      <title>Inquiry</title>
      
      <Component 
      isAdmin={isAdmin} isManager={isManager} userPath={userPath} token={token} 
      allbranches={allbranches}
      isUpdate={false} id={null}
      {...pageProps} />
    </>
  );
}
