import { NextResponse, type NextRequest } from 'next/server'
import { SESSION_COOKIE_NAME, SIGN_IN_ROUTE } from './lib/constants';

const protectedRoutes = ['profile'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(`/${route}`));

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL(SIGN_IN_ROUTE, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*'],
}