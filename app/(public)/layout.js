// app/(public)/layout.js

import Footer from '../_components/shared/Footer';
import Navbar from '../_components/shared/Navbar';

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col max-w-6xl mx-auto w-full px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
