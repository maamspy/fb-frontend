// app/(protected)/layout.js

import ProtectedSidebar from './_components/ProtectedSidebar';

export default function ProtectedLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <ProtectedSidebar />
      {/* Main content */}
      <main className="flex-grow flex flex-col w-full md:ml-56 pt-16 md:pt-0 px-4">
        {children}
      </main>
    </div>
  );
}
