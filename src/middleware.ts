import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(
    "🐛 XXX ~ middleware ~ request:",
    request,
    request.geo,
    request.ip,
    request.headers.get("x-forwarded-for")
  )
  // return NextResponse.redirect(new URL('/home', request.url))
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
}
