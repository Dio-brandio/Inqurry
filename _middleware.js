import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export default function middleware(NextRequest) {
    if (NextRequest.nextUrl.pathname.startsWith('/Admin')) {
        console.log("SFA");
    }

}


