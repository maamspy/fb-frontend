// app/layout.js

import './globals.css';
import { Raleway as RalewayFont } from 'next/font/google';
import Providers from './providers';
import Navbar from './_components/shared/Navbar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Footer from './_components/shared/Footer';

export const metadata = { title: 'Home | Form Builder' };

const raleway = RalewayFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${raleway.className} flex flex-col min-h-screen`}>
        <Providers session={session}>
          <Navbar />
          <main className="flex-grow flex flex-col max-w-6xl mx-auto w-full px-4">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
