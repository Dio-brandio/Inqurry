import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import React,{useState,useEffect} from 'react';
import Cookies from "js-cookie";

const allBranchApi = 'http://localhost:3000/api/getAllBranches';

export default function App({ Component, pageProps }) {
  
  const router = useRouter()
  const isAdmin = router.pathname.includes("/Admin")
  const isManager = router.pathname.includes("/Manager")
  const userPath = isAdmin ? "Admin" : isManager ? "Manager" : "Employee"
  const token = Cookies.get('authtoken')

return (
  <>
    <title>Inquiry</title>

    <Component isAdmin={isAdmin} isManager={isManager} userPath={userPath} token={token} {...pageProps} />
  </>
);
}
