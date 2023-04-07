import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'


export default async function middleware(req) {
  const { cookies } = req
  const ck = cookies.get('authtoken')?.value
  const isAdmin=await checkCookieAndRedirect("admin",ck)
  const isManager=await checkCookieAndRedirect("manager",ck)
  const isEmployee=await checkCookieAndRedirect("employee",ck)
  const userPath=isAdmin?"Admin":isManager?"Manager":"Employee"

  if (req.nextUrl.pathname.startsWith('/Admin') ) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/login",req.url))
    }
  }
  if (req.nextUrl.pathname.startsWith('/Manager') ) {
    if (!isManager) {
      return NextResponse.redirect(new URL("/login",req.url))
    }
  }
  if (req.nextUrl.pathname.startsWith('/Employee') ) {
    if (!isEmployee) {
      return NextResponse.redirect(new URL("/login",req.url))
    }
  }
  if (req.nextUrl.pathname.startsWith('/login') ) {
    if (isAdmin || isEmployee || isManager) {
      return NextResponse.redirect(new URL(`/${userPath}`,req.url))
    }
  }


}

const checkCookieAndRedirect=async( role,ck)=>{
    if (ck == undefined || ck == null || ck == ' ') {
      return false
    }
    if (ck) {
      const { payload } = await jwtVerify(ck, new TextEncoder().encode(process.env.JWT_SECRET)).catch((err)=>{
        return false
      })
      if (payload==undefined) {
        return false
      }
      if (payload.role === role) {
        return true
      }
      else {
        return false
      }
    }
}

