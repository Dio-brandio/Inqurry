import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'


export default async function middleware(req) {
  const { cookies } = req
  const ck = cookies.get('authtoken')?.value
  if (req.nextUrl.pathname.startsWith('/Admin') ) {
    if (!await checkCookieAndRedirect("admin",ck)) {
      return NextResponse.redirect(new URL("/login",req.url))
    }
  }
  if (req.nextUrl.pathname.startsWith('/login') ) {
    if (await checkCookieAndRedirect("admin",ck)) {
      return NextResponse.redirect(new URL("/Admin",req.url))
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

export const config = {
  matcher: ['/Admin','/login']
}