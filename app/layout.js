// app/layout.js

import './globals.css';
import { Raleway as RalewayFont } from 'next/font/google';
import Providers from './providers';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export const metadata = { title: 'Home | Form Builder' };

const raleway = RalewayFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <Providers session={session}>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
