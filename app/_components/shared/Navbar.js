// app/_components/shared/Navbar.js

'use client';

import { RippleButton } from '@/components/magicui/ripple-button';
import { Menu, X, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) handleClose();
  }, [pathname]);

  const menuButtons = session ? (
    <>
      <Link
        href="/dashboard"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard/new"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        New
      </Link>
      <Link
        href="/dashboard/settings"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Settings
      </Link>
      <Link
        href="/dashboard/analytics"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Analytics
      </Link>
      <Link
        href="/dashboard/reports"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Reports
      </Link>
    </>
  ) : (
    <>
      <Link
        href="/"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Home
      </Link>
      <Link
        href="/docs"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Docs
      </Link>
      <Link
        href="/templates"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Templates
      </Link>
      <Link
        href="/pricing"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Pricing
      </Link>
      <Link
        href="/contact"
        onClick={handleClose}
        className="block md:inline text-gray-700 hover:text-blue-600"
      >
        Contact
      </Link>
    </>
  );

  const authButtons = session ? (
    <RippleButton
      rippleColor="#FFB6C1"
      onClick={() => signOut()}
      className="text-gray-700 hover:text-red-600"
    >
      <div className="flex items-center gap-2">
        <LogOut size={20} />
        <span>Logout</span>
      </div>
    </RippleButton>
  ) : (
    <Link href="/login" onClick={handleClose}>
      <RippleButton rippleColor="#ADD8E6">Login</RippleButton>
    </Link>
  );

  return (
    <>
      <nav className="bg-pink-100/30 backdrop-blur-md border-b border-black/5 sticky top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto py-4 px-4 flex items-center justify-between">
          <Image
            src="/form_builder_logo.png"
            width={35}
            height={35}
            alt="Form Builder Logo PNG"
          />
          <div className="hidden md:flex items-center space-x-8">
            {menuButtons}
          </div>
          <div className="hidden md:flex space-x-2 items-center">
            {authButtons}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 md:hidden transition-opacity duration-300 ease-in-out ${
          isOpen && !isClosing ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      ></div>

      {/* sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white md:hidden shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? isClosing
              ? '-translate-x-full'
              : 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        <div className="p-5 space-y-4">
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="text-gray-600 hover:text-gray-800 size-5 flex items-center justify-center"
            >
              <X />
            </button>
          </div>
          {menuButtons}
          <hr />
          <div className="flex flex-col space-y-2">{authButtons}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
