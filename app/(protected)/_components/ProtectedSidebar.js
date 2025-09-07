// app/(protected)/_components/ProtectedSidebar.js

'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  FilePlus2,
  Settings,
  BarChart2,
  FileText,
  Menu,
  X,
  LogOut,
} from 'lucide-react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

export default function ProtectedSidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/dashboard/forms/new', label: 'New', icon: FilePlus2 },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
    { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
    { href: '/dashboard/reports', label: 'Reports', icon: FileText },
  ];

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="md:hidden flex items-center justify-between bg-pink-100/30 border-b border-black/5 px-4 py-4 fixed top-0 left-0 w-full z-40">
        <Image src="/form_builder_logo.png" alt="Logo" width={35} height={35} />
        <button onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-white border-r fixed top-0 left-0 h-full">
        <div className="py-4 flex items-center justify-center gap-4 border-b">
          <Image
            src="/form_builder_logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
          <span className="text-lg font-semibold text-gray-700">
            Form Builder
          </span>
        </div>

        <div className="flex-1 flex flex-col px-3 mt-2">
          <nav className="flex flex-col space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-100"
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="mt-auto pt-2 mb-10">
            <button
              onClick={() => signOut()}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-white transform transition-transform duration-300 z-50 md:hidden flex flex-col ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex border-b items-center justify-between px-4 h-17">
          <p>Menu</p>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 flex flex-col px-3 py-2 overflow-auto">
          <nav className="flex flex-col space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm rounded hover:bg-gray-100"
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Logout Button (mobile) */}
          <div className="mt-auto pt-2 mb-6">
            <button
              onClick={() => {
                setOpen(false);
                signOut();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 md:hidden transition-opacity duration-300 ease-in-out ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}
