import { ROUTES } from "@/constants";
import { auth } from "next-auth/server";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== ROUTES.HOME) {
    const newUrl = new URL(ROUTES.HOME, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    {
      source:
        "/((?!api|sse|_next|_next/static|_next/image|favicon.ico|static|images|.*\\..*).*)",
    },
  ],
};
