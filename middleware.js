import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // If accessing login page while logged in -> redirect to dashboard
  if (pathname === '/login' && token) {
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // If accessing protected page without token -> redirect to login
  const protectedPaths = ['/dashboard']; // add more protected routes if needed
  if (protectedPaths.some((path) => pathname.startsWith(path)) && !token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
