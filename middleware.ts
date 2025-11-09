import { NextRequest, NextResponse } from "next/server";

// const protectedUrls = [
//     '/panel'
// ]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("token => ", pathname);

  //   const excludedPaths = ["/"];
  //   const isExcluded = excludedPaths.some((path) => pathname === path);
  //   if (isExcluded) {
  //     return NextResponse.next();
  //   }
  // console.info(isAuthenticated())

  const token = request.cookies.get("auth-token")?.value;
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  } else if (pathname.includes("/login") && token) {
    const panelUrl = new URL("/panel/dashboard", request.url);
    return NextResponse.redirect(panelUrl);
  }

  //   return NextResponse.next();

  // return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ["/panel/:path*", "/login"],
};
